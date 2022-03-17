<header class="navbar">
	<section class="navbar-section">
		<a href="../" class="navbar-brand mr-2">Réseaux sensibles</a>
		<a href="/rs/reseaux" class="btn btn-link">Redes</a>
		<a href="/rs/critiques" class="btn btn-link">Críticas de Arte</a>
		<a href="/rs/a-propos" class="btn btn-link">Sobre</a>
	</section>
</header>

<main class="container">
  <slot></slot>
</main>

<footer class="footer">
	<div class="content has-text-centered">
		<p>Réseaux Sensibles * Talitha Motter</p>
	</div>
</footer>

<style>
:root {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
:link {
  color: brown;
}
.footer {
    margin: 5rem 0;
    text-align: center;
	font-size: x-small
  }

</style>