export function UserCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-6">
      <h2 className="text-2xl font-semibold text-blue-800 mb-2">{user.name}</h2>

      <div className="text-gray-600 space-y-1">
        <p>
          <span className="font-medium text-gray-800">👤 Username:</span>{" "}
          {user.username}
        </p>
        <p>
          <span className="font-medium text-gray-800">📧 Email:</span>{" "}
          {user.email}
        </p>
        <p>
          <span className="font-medium text-gray-800">📞 Phone:</span>{" "}
          {user.phone}
        </p>
        <p>
          <span className="font-medium text-gray-800">🌐 Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            {user.website}
          </a>
        </p>
        <p>
          <span className="font-medium text-gray-800">🏢 Company:</span>{" "}
          {user.companyName}
        </p>
        <p>
          <span className="font-medium text-gray-800">🏠 Address:</span>{" "}
          {user.fullAddress}
        </p>
      </div>
    </div>
  );
}
