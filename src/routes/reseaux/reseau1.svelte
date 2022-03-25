<script>
	import { onMount } from 'svelte';
	import cytoscape from 'cytoscape';
	// import { networks }  from '$lib/performatus/networks'
	// import { styles }  from '$lib/performatus/styles'

	export let item;

	// console.log('networks', networks)
	// console.log('style', styles)
	console.log('item', item)

	// const network = [
    // { data: { id: 'a' } },
    // { data: { id: 'b' } },
    // {
    //   data: {
    //     id: 'ab',
    //     source: 'a',
    //     target: 'b'
    //   }
    // }]
onMount(() => {

	// fetch('./test.json')
	// 	.then(res => res.json())
	// 	.then(data => console.log(data))
		
	var cy = cytoscape({
			container: document.getElementById('cy'),
			elements: item.networks["rsArtistTermAuthorByPublicationrePerformatus.xml"].elements,
			style: item.styles[0].style,
			layout: { name: 'preset', padding: 10 },
			boxSelectionEnabled: !0,
        ready: function() {
            window.cy = this, 
                    cy.load(network.elements), console.log(network);
                    console.log(style);
                    var o = e("default", style);
                    null === o && (o = style), cy.style().fromJson(o.style).update()
                
        }
			 // container to render in
		});
});

</script>
<svelte:head>
	<!-- <script src="networks.json"/> -->
	<title>Artistas-temas - eRevista Performatus</title>
</svelte:head>

<ul class="breadcrumb">
	<li class="breadcrumb-item">
		<a href="/">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux">Redes</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseau1">Artistas-temas - Revista Performatus</a>
	</li>
</ul>

<h2>Artistas-temas - eRevista Performatus</h2>
<p>Rede unimodal dos artistas-temas de 65 críticas publicadas pela eRevista Performatus até abril de 2019.</p>

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