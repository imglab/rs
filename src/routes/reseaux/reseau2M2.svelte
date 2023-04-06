<!-- deuxième façon d'ajouter le réseau -->
<script>
	import { onMount } from 'svelte';
	import cytoscape from 'cytoscape';
	import { networks }  from '$lib/2ModePerformatus/networks'
	import { styles }  from '$lib/2ModePerformatus/styles'

	console.log('networks', networks)
	console.log('style', styles)

	onMount(() => {
		
	var cy = cytoscape({
			container: document.getElementById('cy'),
			elements: networks["rs2ModeArtistTermAuthorByPublicationrePerformatus.xml_1"].elements,
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
	<title>Autores e Artistas-temas - eRevista Performatus</title>
</svelte:head>

<ul class="breadcrumb">
	<li class="breadcrumb-item">
		<a href="/" class="btn btn-link">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux" class="btn btn-link">Redes</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseauxBimodaux" class="btn btn-link">Redes Bimodais</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseau2M2" class="btn btn-link">eRevista Performatus</a>
	</li>
</ul>

<h2>Autores e Artistas-temas - eRevista Performatus</h2>
<p>Rede bimodal dos 147 artistas-temas das críticas publicadas pela <a href="https://performatus.com.br/">eRevista Performatus</a> até abril de 2019 com seus 45 autores. Última atualização: 20/03/2023</p>
<div id="cy"/>

<style>

	body{
		background:#fff;
		font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
		color:#555;font-weight:100
	}
	.browsehappy{margin:.2em 0;
		background:#fff;
		color:#000;
		padding:.2em 0}
	
	#cy{
	  margin:auto;
	  width: 100%;
	  height: 30rem;
	  background-color:#fff
	}

</style>