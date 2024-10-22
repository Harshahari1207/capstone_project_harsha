
const Home = () => {
  return (
    <div className="home">
      
      <div className="hero container d-flex flex-column justify-content-center align-items-center">
        <div className="w-100 mt-4">
          <h1 className="text-center">
            This Is New Era Money Always In Your Mobile
          </h1>
          <p className="text-center">
            A platform for banks and financial services providers to connect
            with their customers.
          </p>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">User Authentication & Security</h5>
                  <p className="card-text">
                    - A registered user should be able to log in to the system.
                    <br />- Users' passwords should not be stored directly
                    (encryption must be used).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Banking Services</h5>
                  <p className="card-text">
                    - Users can access bank products and services.
                    <br />
                    - View statements from multiple accounts in one dashboard.
                    <br />
                    - Transfer money between bank accounts.
                    <br />- Monitor card activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">User Profile Management</h5>
                  <p className="card-text">
                    - Users can edit personal information in the profile
                    section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
