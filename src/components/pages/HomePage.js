import React from "react";
import { Card, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/user";

function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Card>
      HomePage
      <Button
        onClick={() =>
          dispatch(
            logoutAction(() => {
              history.push("/");
            })
          )
        }
      >
        Logout
      </Button>
    </Card>
  );
}

export default HomePage;
