/* eslint-disable */
import { ClipLoader } from "react-spinners";

const LoadingSpinner = (WrappedComponent) => {
  return function WithLoaderComponent({ loading, ...props }) {
    if (loading) {
      return (
        <div className="loader-container">
          <div className="loader">
            <ClipLoader color="#007BFF" loading={loading} size={50} />
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default LoadingSpinner;
