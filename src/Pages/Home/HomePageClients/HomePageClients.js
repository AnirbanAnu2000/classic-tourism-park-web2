import './HomePageClients.css';

const HomePageClients = () => {

    return (

        <div class="container clients">
            <div class="row">
                <h2 className="brand-color mb-5 client-heading">Our Happy Clients</h2>
                <div className="col-lg-4 client">
                    <div className="card w-100 client">
                        <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/clients/c1.jpg" className="w-100" alt="" />
                        <div className="card-body">
                        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <h5>-- Kate Winslet</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card w-100 client">
                        <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/clients/c2.jpg" className="w-100" alt="" />
                        <div className="card-body">
                        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <h5>-- Tom Cruise</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card w-100 client">
                        <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/clients/c3.jpg" className="w-100" alt="" />
                        <div className="card-body">
                        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <h5>-- Lara Pulver</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageClients;


