<header class="navbar">
	<section class="navbar-section">
		<a href="../" class="navbar-brand mr-2">Réseaux sensibles</a>
		<a href="/reseaux" class="btn btn-link">Redes</a>
		<a href="/critiques" class="btn btn-link">Críticas de Arte</a>
		<a href="/a-propos" class="btn btn-link">Sobre</a>
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
    margin: 3rem 0;
    text-align: center;
	font-size: x-small
  }

.navbar {
		width:89%;
        margin-left:auto;
        margin-right:auto;
}

.container  {
        width:90%;
        margin-left:auto;
        margin-right:auto;
}
</style>