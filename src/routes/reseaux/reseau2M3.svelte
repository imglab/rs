<!-- deuxième façon d'ajouter le réseau -->
<script>
	import { onMount } from 'svelte';
	import cytoscape from 'cytoscape';
	import { networks }  from '$lib/2ModeArteContexto/networks'
	import { styles }  from '$lib/2ModeArteContexto/styles'

	console.log('networks', networks)
	console.log('style', styles)

	onMount(() => {
		
	var cy = cytoscape({
			container: document.getElementById('cy'),
			elements: networks["rs2ModeArtistTermAuthorByPublicationreArteContexto.xml_1"].elements,
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
	<title>Autores(as) e Artistas-temas - Arte ConTexto</title>
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
		<a href="/reseaux/reseau2M3" class="btn btn-link">Arte ConTexto</a>
	</li>
</ul>

<h2>Autores(as) e Artistas-Tema - Arte ConTexto</h2>
<p>Rede bimodal dos(as) 69 artistas-tema das críticas publicadas pela <a href="https://artcontexto.com.br/">Arte ConTexto</a> até abril de 2019 com seus(suas) 31 autores(as). Última atualização: 02/2024</p>

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