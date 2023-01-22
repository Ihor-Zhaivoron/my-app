import  User  from "../User/User";
import PropTypes from "prop-types";

const UsersList = ({ users }) => {
  return users.map((user) => {
    return (
      <li key={user.id}>
        <User user={user} />
      </li>
    );
  });
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default UsersList;
