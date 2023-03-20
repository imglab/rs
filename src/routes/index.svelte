<!-- <script lang="ts" context="module">
	
	export const load = async ({ fetch }) => {
		const res = await fetch('http://localhost:8984/corpus');
		const data = await res.json();

		return { props: { item: data } };
	};
</script>

<script>
	export let item
	console.log(item)
</script>

<svelte:head>
  <title>Réseaux sensibles - Corpus</title>
</svelte:head>

<div>
	<p>{item.index}</p>
</div> -->

<div class="hero bg-primary hero-sm">
	<div class="hero-body">
		<h1>Corpus Réseaux Sensibles</h1>
		<p>Críticas de arte publicadas pela revistas digitais Icônica, eRevista Performatus, Arte ConTexto, Revista Desvio e o fermento até abril 2019. Última atualização: 20/03/2023</p>
	</div>
</div>

<p></p>

<div class="container">
	<div class="columns">
		<div class="column col-xl-4">
				<h4>Críticas de Arte</h4>
				<ul>
					<li>Icônica: 73</li>
	  				<li>eRevista Performatus: 65</li>
	  				<li>Arte ConTexto: 42</li>
	  				<li>Revista Desvio: 97</li>
	  				<li>o fermento: 23</li>
	  				<li>Total de Textos: 300</li>
	  				<li>Total de Autores: 111</li>
   				</ul>
		</div>
		<div class="column col-xl-4">
				<h4>Pessoas</h4>
				<ul>
				   <li>Artistas: 1071</li>
				   <li>Coletivos de Artistas: 77</li>
				   <li>Curadores: 121</li>
				   <li>Outras Pessoas: 220</li>
				   <li>Outros Coletivos: 2</li>
				</ul>
		</div>
		<div class="column col-xl-4">
		
   				<h4>Produções artísticas</h4>
   				<ul>
					<li>Total de Obras e Séries de Obras: 946</li>
					<li>Total de Eventos Artísticos: 337</li>
   				</ul>
				<p></p>
   				<h4>Lugares de Exposição</h4>
  				<ul>
					<li>Total de Lugares: 222</li>
   				</ul>
		</div>
	</div>	
</div>
<div></div>