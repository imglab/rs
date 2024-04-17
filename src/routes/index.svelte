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
		<p>Críticas de arte publicadas pela revistas digitais Icônica, eRevista Performatus, Arte ConTexto, Revista Desvio e o fermento até abril 2019. Última atualização: 02/2024</p>
	</div>
</div>

<p></p>

<div class="container">
	<div class="columns">
		<div class="column col-xl-4">
				<h4>Críticas de Arte</h4>
				<ul>
					<li><a href="/critiques/critiques_iconica">Icônica</a>: 73</li>
	  				<li><a href="/critiques/critiques_performatus">eRevista Performatus</a>: 65</li>
	  				<li><a href="/critiques/critiques_arte_contexto">Arte ConTexto</a>: 42</li>
	  				<li><a href="/critiques/critiques_desvio">Revista Desvio</a>: 97</li>
	  				<li><a href="/critiques/critiques_ofermento">o fermento</a>: 23</li>
	  				<li>Total de Textos: 300</li>
	  				<li>Total de Autores: 111</li>
   				</ul>
		</div>
		<div class="column col-xl-4">
				<h4>Pessoas</h4>
				<ul>
				   <li><a href="/indexCorpus#artistasIndex">Artistas</a>: 1072</li>
				   <li>Coletivos de Artistas: 77</li>
				   <li>Curadores: 121</li>
				   <li>Outras Pessoas: 218</li>
				   <li>Outros Coletivos: 2</li>
				</ul>
		</div>
		<div class="column col-xl-4">
		
   				<h4>Produções artísticas</h4>
   				<ul>
					<li><a href="/indexCorpus#obrasIndex">Total de Obras e Séries de Obras: 946</a></li>
					<li><a href="/indexCorpus#eventosIndex">Total de Eventos e Séries de Eventos Artísticos: 337</a></li>
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