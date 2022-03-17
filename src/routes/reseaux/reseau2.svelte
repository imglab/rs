<script>
	import { onMount } from 'svelte';
	import cytoscape from 'cytoscape';
	import { networks }  from '$lib/revistaDesvio/networks'
	import { styles }  from '$lib/revistaDesvio/styles'

	console.log('networks', networks)
	console.log('style', styles)

	onMount(() => {
		
	var cy = cytoscape({
			container: document.getElementById('cy'),
			elements: networks["rsArtistTermAuthorByPublicationreRevistaDesvio.xml"].elements,
			style: styles[0].style,
			layout: { name: 'preset', padding: 10 },
			boxSelectionEnabled: !0,
        ready: function() {
            window.cy = this, 
                    cy.load(network.elements), console.log(network);
                    console.log(style);
                    var o = e("default", style);
                    null === o && (o = style), cy.style().fromJson(o.style).update()
                
        }
		});
});

</script>

<svelte:head>
	<title>Artistas-temas - Revista Desvio</title>
</svelte:head>

<ul class="breadcrumb">
	<li class="breadcrumb-item">
		<a href="/rs">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/rs/reseaux">Redes</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/rs/reseaux/reseau2">Artistas-temas - Revista Desvio</a>
	</li>
</ul>

<h2>Artistas-temas - Revista Desvio</h2>
<p>Rede unimodal dos artistas-temas de 97 críticas publicadas pela Revista Desvio até abril de 2019.</p>
<div id="cy"/>

<style>

	body{
		background:#fff;
		font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
		color:#555;font-weight:100
	}
	.browsehappy{margin:.2em 0;
		background:#ccc;
		color:#000;
		padding:.2em 0}
	
	#cy{
	  margin:auto;
	  width: 70%;
	  height: 70rem;
	  background-color:#ccc
	}
	
	
	</style>