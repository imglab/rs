<header class="navbar">
	<section class="navbar-section">
    <a href="/" class="navbar-brand mr-1"><b>RÉSEAUX SENSIBLES</b></a>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.21.0/cytoscape.min.js" integrity="sha512-6NNH8uUbdENB10r5FH/4DZviHTQ44GtZ+c+fwSiWM4GekjajHkYanpH0+jWt3meFll/HHWAcxKLcMpSAXuT/Dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.21.0/cytoscape.esm.js" integrity="sha512-RTfyIa3ZxryS01ObF38oKa0YH7JDbWiuGzwbygio4DumYOeSQJvY/lkRiPkYvsowMNM+BY38pb7Gl0J02r9Upw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.21.0/cytoscape.esm.min.js" integrity="sha512-QDeM03m31yKvsDS9c5y8pi+FmhFDLqQOBrv/mN5zrGMw7c94UzjF8TIRuYfEcbP3czCHOOq1tq0DJgzGDajGzA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.21.0/cytoscape.umd.js" integrity="sha512-xSF6S1H8UROpNDWZClp2akRXK6RhFiXvj+XrehPKfgzWjxYAON+AOMsbT0/UlahXiSVvGvkeafM8L8fZG/zjyw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.21.0/cytoscape.umd.min.js" integrity="sha512-43GqnpGcxI3IKbvlBnxyaKwTgTXbWT5Lmxm5Rs929uFBpxU05xfQy0Z+UIIBDmmf8y1lMEQAPUDqSP4bf3CiWw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	</section>
  <section class="navbar-center">
    <!-- <img src="/rs_logo.png" alt="logo" height="100px" width="auto"/> -->
  </section>
  <section>
    <a href="/revues" class="btn btn-link">Revistas</a>
    <a href="/reseaux" class="btn btn-link">Redes</a>
		<a href="/critiques" class="btn btn-link">Críticas de Arte</a>
    <a href="/indexCorpus" class="btn btn-link">Index</a>
    <a href="/a-propos" class="btn btn-link">Sobre</a>
    <a href="https://resensibles.hypotheses.org/" class="btn btn-link">Blog</a>
  </section>
</header>

<main class="container">
  <slot></slot>
</main>

<footer class="footer">
	<div class="content has-text-centered">

    <a href="https://resensibles.hypotheses.org" class="btn btn-link"><i class="icon icon-2x icon-link"></i></a>
    <a href="mailto:talitha.motter@gmail.com" class="btn btn-link"><i class="icon icon-2x icon-mail"></i></a>
    <p></p>
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