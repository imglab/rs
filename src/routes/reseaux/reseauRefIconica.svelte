<!-- deuxième façon d'ajouter le réseau -->
<script>
	import { onMount } from 'svelte';
	import cytoscape from 'cytoscape';
	import { networks }  from '$lib/iconicaRef/networks'
	import { styles }  from '$lib/iconicaRef/styles'

	console.log('networks', networks)
	console.log('style', styles)

	onMount(() => {
		
	var cy = cytoscape({
			container: document.getElementById('cy'),
			elements: networks["rsArtistRefTextByPublicationreIconica.xml"].elements,
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
	<title>Artistas-Referência - Icônica</title>
</svelte:head>

<ul class="breadcrumb">
	<li class="breadcrumb-item">
		<a href="/" class="btn btn-link">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux" class="btn btn-link">Redes</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseauxUnimodauxArtistesRef" class="btn btn-link">Redes Unimodais dos Artistas-Referência</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseauRefIconica" class="btn btn-link">Artistas-Tema - Icônica</a>
	</li>
</ul>

<h2>Artistas-Referência - Icônica</h2>
<p>Rede unimodal dos 169 artistas-referência das críticas publicadas pela <a href="https://www.iconica.com.br/site/">Icônica</a> até abril de 2019. Última atualização: 03/01/2024</p>
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