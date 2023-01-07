import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParameter = (searchQueryParam) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(searchQueryParam);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
};
