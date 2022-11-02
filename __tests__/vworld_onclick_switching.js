vmap.on('singleclick', function(evt) {
	var pixel = evt.pixel;
	if(typeof vmap.getLayerByName("wms_theme") == "object"){
		var layer = vmap.getLayerByName("wms_theme").get("id")
		if(layer.indexOf(",") >-1){
			layer = layer.split(",")[0]; //data API는 레이어 1개씩 조회가 가능해서 2개이상이 입력될경우 변경되도록 설정(지적도)
		}
		var min = vmap.getCoordinateFromPixel([evt.pixel[0] -4,evt.pixel[1]+4])
	    var max = vmap.getCoordinateFromPixel([evt.pixel[0] +4,evt.pixel[1]-4])
	    var box = min[0]+","+min[1]+","+max[0]+","+max[1]

		console.log(max);
		$('[name=geomfilter]').val('BOX('+box+')');		
		$('[name=data]').val(layer);		
		
	    $.ajax({
	    	type: "get",
	    	url: "https://api.vworld.kr/req/data",
	    	data : $('#dataForm').serialize(),
	    	dataType: 'jsonp',
	    	async: false,
	    	success: function(data) {
	    	    
	    	    var vectorSource = new ol.source.Vector({features: (new ol.format.GeoJSON()).readFeatures(data.response.result.featureCollection)})
	    	    vmap.removeLayer(vmap.getLayerByName("search_result")) // 기존 선택된 폴리곤 삭제
	    	    
	    	    var vector_layer = new ol.layer.Vector({
					source: vectorSource,
					style: vectorStyle
	    	  	})
	    	    
	    	    vector_layer.set("name","search_result");
	    	 	vmap.addLayer(vector_layer);
	    	 	
	    	 	var resultFeature = vectorSource.getFeatures()[0]
	    	 	var resultFeature = vectorSource.getFeatures()[0]
	    	 	if(typeof resultFeature == "object"){
		        	var featurehtml="";
		        	for(var i in resultFeature.getKeys()){ 
						switch(resultFeature.getKeys()[i]) {
							case 'addr':
								featurehtml += "주소 = "+resultFeature.get(resultFeature.getKeys()[i])+"\n";
								break;
							case 'gosi_year':
								featurehtml += "고시 년도 = "+resultFeature.get(resultFeature.getKeys()[i])+"\n";
								break;
							case 'gosi_month': 
								featurehtml += "고시 월 = "+resultFeature.get(resultFeature.getKeys()[i])+"\n";
								break;
							case 'jiga': 
								featurehtml += "제곱미터당 가격(원) = "+resultFeature.get(resultFeature.getKeys()[i])+"\n";
								break;
							case 'geometry':
							case 'pnu': 
							case 'jibun': 
							case 'bonbun':
							case 'bubun':
							default:
								break;
						}
		        		//featurehtml += resultFeature.getKeys()[i] + " = "+resultFeature.get(resultFeature.getKeys()[i])+"\n";
		        	}
		        	$('#data_result').html(featurehtml);
	    	 	}
	    	},
	    	error: function(xhr, stat, err) {}
	    });
	    // ■■■■■ BOX 영역 표시 테스트 시작
	    //min, min
   		var box_coordinates =[[min[0]*1,min[1]*1],[min[0]*1,max[1]*1],[max[0]*1,max[1]*1],[max[0]*1,min[1]*1],[min[0]*1,min[1]*1] ];
		//폴리곤생성
	    var polygon_feature = new ol.Feature({
	        geometry: new ol.geom.Polygon([box_coordinates])
	    });
	    var style = new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: [0, 255, 0, .7],
				width: 3
			}),
			fill: new ol.style.Fill({
				color: [0, 0, 255, .4]
			})
		});	
	    polygon_feature.setStyle(style);
	    var vector_layer = new ol.layer.Vector({
	    	source: new ol.source.Vector({
	    	    features: [polygon_feature]
	    	})
	    })
	    vector_layer.set("vector","box_layer")
        vmap.getLayers().forEach(function(layer){
			if(layer.get("vector")=="box_layer"){
				vmap.removeLayer(layer);
			}
	    })
	 	vmap.addLayer(vector_layer);
	}
});