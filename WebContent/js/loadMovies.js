/**
 * 
 */
$(document).ready(function(){
				//console.log('Button clicked');
				var searchVal = $("#search").val();
				var endpoint = "http://dbpedia.org/sparql";
	        	var query = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
	        			"PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> " +
	        			"PREFIX dbo:  <http://dbpedia.org/ontology/> " +
	        			"PREFIX foaf: <http://xmlns.com/foaf/0.1/> " +
	        			"PREFIX dbpedia: <http://dbpedia.org/resource/> " +
	        			"PREFIX dbp: <http://dbpedia.org/property/> " +

	        			"SELECT ?film_title ?film_abstract " +
	        			"where { " +
	        			"?film_title rdf:type <http://dbpedia.org/ontology/Film> . " +
	        			"?film_title foaf:name ?film_name . " +
	        			"?film_title rdfs:comment ?film_abstract . " + 
	        			"?film_title rdfs:label ?lang " +
						"FILTER(LANG(?film_abstract) = 'en') " +
						"FILTER(LANG(?lang) = 'en') " +
					"} " + 
					"group by ?film_name " +
					"LIMIT 12 OFFSET 0";
	      		//console.log(query);
	        	var queryUrl = endpoint+"?query="+ encodeURIComponent(query) +"&format=json";
	        	//document.write(queryUrl);
	        	//console.log(queryUrl);
	        	//document.getElementById("results").innerHTML = queryUrl
				$.ajax({
					url:endpoint + "?query=" + encodeURIComponent(query),
					dataType:'json',
				}).done(function(result){
					if(result.results.bindings.length == 0){
						//document.getElementById("results").innerHTML += "No results found";
					}else{
						//document.getElementById("results").innerHTML += result.results.bindings[0].abstract.value;	
						var movies = result.results.bindings
						for( i = 0; i < movies.length; i++){
							curMovie = movies[i];
							//console.log(curMovie);
							var str = curMovie.film_title.value;
							var n = str.lastIndexOf('/');
							var res = str.substring(n + 1);
							var title = res.replace(/_/g, " ");
							var abstract = curMovie.film_abstract.value;
							var $title = $("<div>", {text:title});
							$title.attr('style','font-size:16px', 'font-weight:bold');
							var $movieDes = $("<div>", {id: "foo",style: '1px solid black', text: abstract});
							var $div = $("<div>", {"class": "col-md-3 box"});
							$div.append($title)
							$div.append($movieDes)
							$("#results").append($div);
						}
					}
				});	
		});