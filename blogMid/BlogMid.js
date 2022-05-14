import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import {
  Box,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import imgBlogOne from "../../images/blog1.jpg";
import author from "../../images/author.jpg";
const BlogMid = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.blog}>
      <Container className={classes.bigCont}>
        <Grid container className={classes.gridCont} spacing={2}>
          <Grid item lg={8}>
            <Box className={classes.blogItem}>
              <img src={imgBlogOne} alt="" className={classes.img} />
              <Box className={classes.dateBox}>
                <Typography variant="h6" className={classes.date}>
                  30
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  className={classes.dateSpan}
                >
                  June
                </Typography>
              </Box>
              <Container className={classes.smCont}>
                <Typography variant="body1" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam consectetur cumque dolorum, ex incidunt ipsa
                  laudantium necessitatibus neque quae tempora.Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Aperiam consectetur
                  cumque dolorum, ex incidunt ipsa laudantium necessitatibus
                  neque quae tempora.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Aperiam consectetur cumque dolorum, ex
                  incidunt ipsa laudantium necessitatibus neque quae tempora.
                </Typography>
              </Container>
            </Box>
            <Box className={classes.author}>
              <Typography variant="h5">About the author</Typography>
              <div className={classes.underlineBig}></div>
              <Box className={classes.authorBox}>
                <Box className={classes.leftBox}>
                  <img src={author} alt="author1" className={classes.imgAut} />
                </Box>
                <Box className={classes.rightBox}>
                  <Typography className={classes.authTitle}>
                    SYED EKRAM
                  </Typography>
                  <Typography variant="body1" className={classes.authBod}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ultricies quam nisi, vel gravida enim accumsan id.
                    Praesent justo quam, auctor et lorem in, pulvinar ornare
                    orci. Duis dapibus urna purus, eget facilisis nisi tincidunt
                    semper. Integer non dolor egestas, finibus neque sit amet,
                    venenatis risus.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box className={classes.searchBox}>
              <TextField
                variant="outlined"
                label="Search..."
                className={classes.field}
              />
            </Box>
            <Box className={classes.mostRead}>
              <Container className={classes.readCont}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", marginTop: 30 }}
                >
                  MOST READ
                </Typography>
                <div className={classes.underline}></div>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className={classes.linkIpsum}
                >
                  <Typography
                    variant="body1"
                    style={{ marginTop: 20, marginBottom: 20, lineHeight: 1.8 }}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscijng
                    elit.Fusce vitae risus nec dui venenatis dignissim.
                  </Typography>
                </Link>
                <div className={classes.underline}></div>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className={classes.linkIpsum}
                >
                  <Typography
                    variant="body1"
                    style={{ marginTop: 20, marginBottom: 20, lineHeight: 1.8 }}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscijng
                    elit.Fusce vitae risus nec dui venenatis dignissim.
                  </Typography>
                </Link>
                <div className={classes.underline}></div>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className={classes.linkIpsum}
                >
                  <Typography
                    variant="body1"
                    style={{ marginTop: 20, marginBottom: 20, lineHeight: 1.8 }}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscijng
                    elit.Fusce vitae risus nec dui venenatis dignissim.
                  </Typography>
                </Link>
                <div className={classes.underline}></div>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className={classes.linkIpsum}
                >
                  <Typography
                    variant="body1"
                    style={{ marginTop: 20, marginBottom: 20, lineHeight: 1.8 }}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscijng
                    elit.Fusce vitae risus nec dui venenatis dignissim.
                  </Typography>
                </Link>
                <div className={classes.underline}></div>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BlogMid;
