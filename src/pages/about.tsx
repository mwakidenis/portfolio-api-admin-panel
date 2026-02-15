import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Link,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ApiIcon from "@mui/icons-material/Api";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";

const About = () => (
  <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
    <Card sx={{ mb: 4, boxShadow: 3 }}>
      <CardHeader
        avatar={<InfoIcon fontSize="large" color="primary" />}
        title={
          <Typography variant="h4" component="h1">
            About the Portfolio API
          </Typography>
        }
        subheader="REST API Documentation and Information"
      />
    </Card>

    <Grid container spacing={3}>
      {/* API Overview */}
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%", boxShadow: 3 }}>
          <CardHeader
            avatar={<ApiIcon color="primary" />}
            title="API Overview"
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              This API serves as the backend for my portfolio website, providing
              access to my projects and professional timeline data.
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Base URL:
            </Typography>
            <Link
              href="https://portfolio-api-admin-panel.onrender.com/api"
              target="_blank"
              sx={{ wordBreak: "break-all" }}
            >
              https://tonybnya-portfolio-api.onrender.com/api
            </Link>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Source Code:
            </Typography>
            <Link
              href="https://github.com/mwakidenis/portfolio-api"
              target="_blank"
              sx={{ wordBreak: "break-all" }}
            >
              https://github.com/mwakidenis/portfolio-api
            </Link>
          </CardContent>
        </Card>
      </Grid>

      {/* Endpoints */}
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%", boxShadow: 3 }}>
          <CardHeader
            avatar={<StorageIcon color="primary" />}
            title="Available Endpoints"
          />
          <CardContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Projects" secondary="/projects" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <CodeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Timelines" secondary="/timelines" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Response Format */}
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 3 }}>
          <CardHeader
            avatar={<CodeIcon color="primary" />}
            title="Response Format"
          />
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Projects Response Format:
            </Typography>
            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                color: "black",
                padding: 2,
                borderRadius: 1,
                overflow: "auto",
              }}
            >
              {`{
    "_id": "string",
    "title": "string",
    "description": "string",
    "tags": ["string"],
    "images": ["string"],
    "liveUrl": "string",
    "sourceUrl": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }`}
            </Box>

            <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
              Timelines Response Format:
            </Typography>
            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                color: "black",
                padding: 2,
                borderRadius: 1,
                overflow: "auto",
              }}
            >
              {`{
    "_id": "string",
    "year": "number",
    "timeline": "string",
    "duration": "string",
    "details": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }`}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default About;
