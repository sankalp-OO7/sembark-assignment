import React from "react";
import { Box, keyframes } from "@mui/material";

interface Props {
  count?: number;
}

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ShimmerGrid: React.FC<Props> = ({ count = 8 }) => {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        mt: 2,
      }}
    >
      {items.map((n) => (
        <Box
          key={n}
          sx={{
            width: {
              xs: "100%",
              sm: "48%",
              md: "30%",
              lg: "22%",
            },
            height: 300,
            minWidth: 200,
            borderRadius: 2,
            background:
              "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: `${shimmer} 1.5s linear infinite`,
          }}
        />
      ))}
    </Box>
  );
};

export default ShimmerGrid;
