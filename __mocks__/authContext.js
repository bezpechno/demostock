export const useAuth = () => ({
    user: { uid: 'test-user' },
    loading: false,
  });
  
  export const AuthProvider = ({ children }) => {
    return children;
  };
  