import Button from "elements/Button";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function ErrorPage(props) {
  const { page } = props;
  console.log("Error page", page);
  // return <Redirect from="/error" to="/" />;
  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-4 text-center">
        <h3 className="mb-4 lead">{page.message}</h3>
        <Button className="btn px-5 rounded-sm" type="link" href="/" isPrimary>
          Back to home
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(ErrorPage);
