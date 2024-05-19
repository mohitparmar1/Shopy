import React from "react";
import ArrowIcon from "../assets/breadcrum_arrow.png";
import { Box, Breadcrumbs, Container, Typography, Chip } from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from 'prop-types';

const StyledBreadcrumb = styled(Chip)({
  backgroundColor: "#f5f5f5", // Light grey background
  height: "24px", // Static height value
  color: "#000", // Primary text color
  fontWeight: 400, // Regular font weight
  "&:hover, &:focus": {
    backgroundColor: "#e0e0e0", 
  },
  "&:active": {
    boxShadow: "0px 1px 3px rgba(0,0,0,0.2)", 
    backgroundColor: "#d5d5d5", 
  },
});

const Breadcrumb = (props) => {
  const { product } = props.data;

  return (
    <Box sx={{ background: '#f4a295' }}>
      <Container maxWidth="xl">
        <Box sx={{ pt: 2, pb: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <a href="/" style={{ textDecoration: 'none' }}>
              <StyledBreadcrumb
                component="a"
                label="Home"
                icon={<HomeIcon fontSize="small" />}
              />
            </a>
            <StyledBreadcrumb
              component="a"
              label={product.category}
              icon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
          <Typography variant="h4" sx={{ mt: 4, fontWeight: 'bold' }}>
            {product.name}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

Breadcrumb.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Breadcrumb;
