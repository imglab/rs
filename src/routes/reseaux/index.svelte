
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
</ul>

<h2>liste des réseaux</h2>
<ul>
  <li><a href="/reseaux/reseau1">Réseau 1</a></li>
  <li><a href="/reseaux/reseau2">Réseau 2</a></li>
</ul>
