import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import Students from "../assets/GLA.svg";
import { LightPurpleButton } from "../components/buttonStyles";

const Homepage = () => {
  
  return (
    <StyledContainer>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <StyledImage src={Students} alt="students" />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTitle>CAMPUS LINK</StyledTitle>
            <StyledText>
              Streamline University management, class organization, and add
              students and faculty. Seamlessly track attendance, assess
              performance, and provide feedback. Access records, view marks, and
              communicate effortlessly.
            </StyledText>
            <StyledBox>
              <StyledLink to="/choose">
                <AnimatedButton variant="contained" fullWidth>
                  Login
                </AnimatedButton>
              </StyledLink>
              <StyledText>
                Don't have an account?{" "}
                <Link to="/Adminregister" style={{ color: "#550080" }}>
                  Sign up
                </Link>
              </StyledText>
            </StyledBox>
          </StyledPaper>
        </Grid>
      </Grid>

      <HeroSection>
        <HeroSectionText>
          Easy to Manage,<HeroSectionSpan>no work at all</HeroSectionSpan>
        </HeroSectionText>
        <HeroSectionFeatures>
          <HeroSectionFeature>
            <HeroSectionFeatureImageDiv>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/private2.png" alt="private2"/>
            </HeroSectionFeatureImageDiv>
            <HeroSectionFeatureInnerDiv>
              <HeroSectionFeatureInnertext>Secure</HeroSectionFeatureInnertext>
              <HeroSectionFeatureInnerpara>All Datas are stored in Encrypted form</HeroSectionFeatureInnerpara>
            </HeroSectionFeatureInnerDiv>
          </HeroSectionFeature>
          <HeroSectionFeature>
            <HeroSectionFeatureImageDiv>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/handshake-heart.png" alt="handshake-heart"/>
            </HeroSectionFeatureImageDiv>
            <HeroSectionFeatureInnerDiv>
              <HeroSectionFeatureInnertext>User Friendly</HeroSectionFeatureInnertext>
              <HeroSectionFeatureInnerpara>Easy to use And Friendly UI</HeroSectionFeatureInnerpara>
            </HeroSectionFeatureInnerDiv>
          </HeroSectionFeature>
          <HeroSectionFeature>
            <HeroSectionFeatureImageDiv>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
            </HeroSectionFeatureImageDiv>
            <HeroSectionFeatureInnerDiv>
              <HeroSectionFeatureInnertext>Enable</HeroSectionFeatureInnertext>
              <HeroSectionFeatureInnerpara>real time attendance processing.</HeroSectionFeatureInnerpara>
            </HeroSectionFeatureInnerDiv>
          </HeroSectionFeature>
          <HeroSectionFeature>
            <HeroSectionFeatureImageDiv>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/grades.png" alt="grades"/>
            </HeroSectionFeatureImageDiv>
            <HeroSectionFeatureInnerDiv>
              <HeroSectionFeatureInnertext>School Grading</HeroSectionFeatureInnertext>
              <HeroSectionFeatureInnerpara>Within the Portal students see their marks</HeroSectionFeatureInnerpara>
            </HeroSectionFeatureInnerDiv>
          </HeroSectionFeature>
          <HeroSectionFeature>
            <HeroSectionFeatureImageDiv>
            <img width="50" height="50" src="https://img.icons8.com/windows/50/graph.png" alt="graph"/>
            </HeroSectionFeatureImageDiv>
            <HeroSectionFeatureInnerDiv>
              <HeroSectionFeatureInnertext>Graphical Representation</HeroSectionFeatureInnertext>
              <HeroSectionFeatureInnerpara>Provide Attendance In Graphical way</HeroSectionFeatureInnerpara>
            </HeroSectionFeatureInnerDiv>
          </HeroSectionFeature>
          <HeroSectionFeature>
            <HeroSectionFeatureImageDiv>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/windows8-tablet.png" alt="windows8-tablet"/>
            </HeroSectionFeatureImageDiv>
            <HeroSectionFeatureInnerDiv>
              <HeroSectionFeatureInnertext>Extras</HeroSectionFeatureInnertext>
              <HeroSectionFeatureInnerpara>Notice,Compalin and many more things </HeroSectionFeatureInnerpara>
            </HeroSectionFeatureInnerDiv>
          </HeroSectionFeature>

        </HeroSectionFeatures>
      </HeroSection>

      {/* Founder Section */}
      <FounderSection>
        <FounderTitle>Meet the Founder</FounderTitle>
        <FounderCard>
          <FounderImage
            src="https://i.ibb.co/qRY7zM8/IMG-20240220-WA0010-removebg.jpg"
            alt="Harsh Nishad"
          />
          <FounderInfo>
            <FounderName>Harsh Nishad</FounderName>
            <FounderRole>B.Tech CSE</FounderRole>
            <FounderLink href="https://harshnishad.me" target="_blank">
              Visit Website
            </FounderLink>
            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/harshnishad"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="https://github.com/harshnishad" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FounderInfo>
        </FounderCard>
      </FounderSection>

      {/* Footer Section */}
      <Box
      component="footer"
      sx={{
        backgroundColor: "#121212", // Set the background to #121212
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="white" // Set the header text color to white
              gutterBottom
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                color: "gray", // Set body text color to gray for contrast
              }}
            >We are XYZ Company, a dedicated team focused on providing high-quality digital solutions to educational institutions. Our goal is to simplify and optimize administrative processes, allowing educators and students to focus more on teaching and learning. We believe in building reliable, scalable, and user-friendly applications that enhance the educational experience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="white" // Set the header text color to white
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                color: "gray", // Set body text color to gray for contrast
              }}
            >
              12/382 Gwaltoli, kanpur, India
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                color: "gray", // Set body text color to gray for contrast
              }}
            >
              Email: harsh.nishad_cs21@gla.ac.in
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                color: "gray", // Set body text color to gray for contrast
              }}
            >
              Phone: +91 8299471328
            </Typography>
          </Grid>
          <Grid item xs={1} sm={4}>
            <Typography
              variant="h6"
              color="white" // Set the header text color to white
              gutterBottom
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook
                sx={{
                  color: "white", // Set icons color to white
                }}
              />
            </Link>
            <Link
              href="https://www.linkdin.com/harshnishad"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <LinkedIn
                sx={{
                  color: "white", // Set icons color to white
                }}
              />
            </Link>
            <Link href="https://www.github.com/harshnishad" color="inherit">
              <GitHub
                sx={{
                  color: "white", // Set icons color to white
                }}
              />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              color: "gray", // Set the copyright text color to gray
            }}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://harshnishad.me/">
              harshnishad
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </StyledContainer>
  );
};

export default Homepage;

// Styled components

const StyledContainer = styled(Container)`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  margin-top:10px;
`;

const StyledPaper = styled.div`
  padding: 24px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  height: auto;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 65vh;
  border-radius: 8px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledText = styled.p`
  color: #dcdcdc;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const AnimatedButton = styled(LightPurpleButton)`
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #7c4dff;
    transform: translateY(-2px);
  }
`;

// Founder Section styled components

const FounderSection = styled.div`
  
  padding: 48px 0;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
  margin-top: 10vh;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FounderTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

const FounderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #272727;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const FounderImage = styled.img`
  width: 200px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 16px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const FounderInfo = styled.div`
  text-align: center;
`;

const FounderName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const FounderRole = styled.p`
  font-size: 1rem;
  color: #dcdcdc;
`;

const FounderLink = styled.a`
  font-size: 1rem;
  color: #7c4dff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Social Links styled components
const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
`;

const SocialLink = styled.a`
  color: #dcdcdc;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #7c4dff;
  }
`;

// Footer styled components


// HeroSection
const HeroSection = styled.div`
    height: 70vh;
    width: 100%;
  `;

  const HeroSectionText = styled.h1`
    padding-top: 50px;
    text-align: center;
    color: white;
  `;
  const HeroSectionSpan = styled.span`
    color: blue;
  `;
  const HeroSectionFeatures = styled.div`
    margin-top:3vh;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:20px;
    
  
  `;
  
  const HeroSectionFeature = styled.div`
    padding:10px;
    margin-top:5vh;
    background-color: white;
    border-radius:20px;
    width:20vw;
    display:flex;
    flex-direction:column;
    height:20vh;
    animation: fadeIn 1s ease-in-out;
  
    @keyframes fadeOut {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    &:hover {
      transform: scale(1.05);
    }
  `;
  const HeroSectionFeatureImageDiv = styled.div`
   
  `;
  const HeroSectionFeatureInnerDiv = styled.div``;
  const HeroSectionFeatureInnertext = styled.h3`
   
  `;
  const HeroSectionFeatureInnerpara = styled.p`
    
  `;
