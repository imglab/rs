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
	  				<li><a href="http://www.reseaux-sensibles.art/indexCorpus#autoresIndex">Total de Autores(as)</a>: 111</li>
   				</ul>
		</div>
		<div class="column col-xl-4">
				<h4>Pessoas</h4>
				<ul>
				   <li><a href="http://www.reseaux-sensibles.art/indexCorpus#artistasIndex">Artistas</a>: 1072</li>
				   <li><a href="http://www.reseaux-sensibles.art/indexCorpus#coletivosIndex">Coletivos de Artistas</a>: 77</li>
				   <li><a href="http://www.reseaux-sensibles.art/indexCorpus#curadoresIndex">Curadores(as)</a>: 121</li>
				   <li>Outras Pessoas: 218</li>
				   <li>Outros Coletivos: 2</li>
				</ul>
		</div>
		<div class="column col-xl-4">
		
   				<h4>Produções artísticas</h4>
   				<ul>
					<li><a href="http://www.reseaux-sensibles.art/indexCorpus#obrasIndex">Total de Obras e Séries de Obras</a>: 946</li>
					<li><a href="http://www.reseaux-sensibles.art/indexCorpus#eventosIndex">Total de Eventos e Séries de Eventos Artísticos</a>: 337</li>
   				</ul>
				<p></p>
   				<h4>Lugares de Exposição</h4>
  				<ul>
					<li><a href="http://www.reseaux-sensibles.art/indexCorpus#lugaresIndex">Total de Lugares</a>: 222</li>
   				</ul>
		</div>
	</div>	
</div>
<div></div>