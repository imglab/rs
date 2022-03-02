<script>
	import { onMount } from 'svelte';
	import cytoscape from 'cytoscape';

  onMount(() => {
    var cy = cytoscape({
  	container: document.createElement('cy') // container to render in
	});
});


</script>
<svelte:head>
	<title>Réseau 2</title>
</svelte:head>

<ul class="breadcrumb">
	<li class="breadcrumb-item">
		<a href="/">Accueil</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux">Réseaux</a>
	</li>
	<li class="breadcrumb-item">
		<a href="/reseaux/reseau1">Réseau 1</a>
	</li>
</ul>

<h1>Titre 2</h1>
<p>lkeamlazlem</p>
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
  width:100rem;
  height:100rem;
  background-color:white
}
</style>