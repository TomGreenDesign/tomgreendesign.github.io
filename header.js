class navBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section> <!-- Header Section-->
		<nav class="navbar navbar-expand-md bg-body-tertiary">
			<div class="container-fluid">
				<a class="navbar-brand" href="index.html">Tom Green</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" dir="rtl" id="navbarNav">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link" aria-current="page" href="about.html">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/index.html#experience">Experience</a>
						</li>

						<li class="nav-item" data-bs-toggle="modal" data-bs-target="#contactModal">
							<a class="nav-link">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>



		<!-- CONTACT INFO SECTION -->
		<div class="modal fade" id="contactModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Contact Me</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">


						<div class="container ">
							<div class="row">
								<div class="col-1">
									<svg xmlns="http://www.w3.org/2000/svg" class="linkIcon vertical-align:middle"
										viewBox="0 0 24 24" height="1em">
										<path fill="#EA5637"
											d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
									</svg>
								</div>
								<div class="col">
									<a style="color:inherit" href="mailto:design@tomgreen.uk">design@tomgreen.uk </a>
								</div>

								<div class="row">
									<div class="col-1">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
											<path fill="#EA5637"
												d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</div>
									<div class="col">
										<a style="color:inherit" href="https://www.linkedin.com/in/tom-jgreen/">
											linkedin.com/in/tom-jgreen
										</a>
									</div>
								</div>

							</div>
							<div class="row">
								<div class="col-1">
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
										<path fill="#EA5637"
											d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
									</svg>
								</div>
								<div class="col">
									Sheffield | United Kingdom
								</div>
							</div>


						</div>

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-tertiary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	</section>
      `;
    }
}



customElements.define('navbar-component', navBar);