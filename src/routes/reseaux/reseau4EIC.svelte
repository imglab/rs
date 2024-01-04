<!-- deuxième façon d'ajouter le réseau -->
<script>
	import { onMount } from 'svelte';
	import cytoscape from 'cytoscape';
	import { networks }  from '$lib/iconicaEIC/networks'
	import { styles }  from '$lib/iconicaEIC/styles'

	console.log('networks', networks)
	console.log('style', styles)

	onMount(() => {
		
	var cy = cytoscape({
			container: document.getElementById('cy'),
			elements: networks["rsArtistTermAuthorByPublicationreIconica.xml"].elements,
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
	<title>Artistas-Tema - Icônica - EIC</title>
</svelte:head>

<ul class="breadcrumb">
	<li class="breadcrumb-item">
		<a href="/" class="btn btn-link">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux" class="btn btn-link">Redes</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseauxUnimodaux" class="btn btn-link">Redes Unimodais dos Artistas-Tema</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseauxUnimodauxEIC" class="btn btn-link">Redes Unimodais dos Artistas-TemaEIC</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseau4" class="btn btn-link">Artistas-Tema - Icônica - EIC</a>
	</li>
</ul>

<h2>Artistas-Tema - Icônica - EIC</h2>
<p>Rede unimodal dos 143 artistas-tema das críticas publicadas pela <a href="https://www.iconica.com.br/site/">Icônica</a> até abril de 2019. Em verde, os artistas que foram identificados na busca da <a href="https://enciclopedia.itaucultural.org.br/">Enciclopédia Itaú Cultural</a>. Última atualização: 20/03/2023</p>
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
	  width: 100%;
	  height: 30rem;
	  background-color:#B0BEC5
	}
	
	
	</style>