import PropTypes from "prop-types";
import { Text, NameText } from "./User.styled";

const User = ({ user: { name, email } }) => {
  return (
    <>
      <Text>
        Name:<NameText> {name}</NameText>
      </Text>
      <Text>
        Email: <NameText>{email}</NameText>
      </Text>
    </>
  );
};
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
