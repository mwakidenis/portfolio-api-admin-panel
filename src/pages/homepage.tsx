import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InfoIcon from "@mui/icons-material/Info";

const HomePage = () => (
  <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
    <Card sx={{ mb: 4, boxShadow: 3 }}>
      <CardHeader
        avatar={<DashboardIcon fontSize="large" color="primary" />}
        title={
          <Typography variant="h4" component="h1">
            Welcome to the Portfolio API Administration Panel
          </Typography>
        }
        subheader="Manage my projects, timelines, and API configurations seamlessly"
      />
    </Card>

    <Grid container spacing={3}>
      {/* Quick Links Section */}
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%", boxShadow: 3 }}>
          <CardHeader
            title="Quick Links"
            subheader="Access key sections of the admin panel"
          />
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<WorkOutlineIcon />}
                href="/#/projects"
                sx={{ justifyContent: "flex-start" }}
              >
                Manage Projects
              </Button>
              <Button
                variant="outlined"
                startIcon={<TimelineIcon />}
                href="/#/timelines"
                sx={{ justifyContent: "flex-start" }}
              >
                Manage Timelines
              </Button>
              <Button
                variant="outlined"
                startIcon={<InfoIcon />}
                href="/#/about"
                sx={{ justifyContent: "flex-start" }}
              >
                About the API
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Recent Activity Section */}
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%", boxShadow: 3 }}>
          <CardHeader
            title="Recent Activity"
            subheader="Latest updates in your portfolio"
          />
          <CardContent>
            <Typography variant="body2">
              <ul>
                <li>
                  <strong>Project Added:</strong> "React Portfolio" - 2 hours
                  ago
                </li>
                <li>
                  <strong>Timeline Updated:</strong> "2023 Milestones" - 1 day
                  ago
                </li>
                <li>
                  <strong>API Key Generated:</strong> For external usage - 3
                  days ago
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    {/* Call to Action */}
    <Box sx={{ mt: 4 }}>
      <Card sx={{ textAlign: "center", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Ready to update your portfolio?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Keep your projects and timelines up to date with ease.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/#/projects"
            sx={{ mt: 2 }}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default HomePage;
