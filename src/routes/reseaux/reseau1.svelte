<script>
	import { onMount } from 'svelte';
// 	import cytoscape from 'cytoscape';
	
//   onMount(
// 		() => {
// 		var cy = cytoscape({
//   	container: document.getElementById('cy'), // container to render in
// 		});
// });

</script>
<svelte:head>
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
		<a href="/reseaux/reseau1">Artistas-temas - Revista Desvio</a>
	</li>
</ul>

<h2>Artistas-temas - eRevista Performatus</h2>
<p>Rede unimodal dos artistas-temas de 65 críticas publicadas pela eRevista Performatus até abril de 2019.</p>

<div id="cy"/>

<style>
body{
	background:#000;
	font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
	color:#555;
	font-weight:100
}
.browsehappy{
	margin:.2em 0;
	background:#ccc;
	color:#000;
	padding:.2em 0}
#cy{
  margin:auto;
  width: 70%;
  height: 70rem;
  background-color:white;
}
</style>