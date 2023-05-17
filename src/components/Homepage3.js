import React from "react";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  Avatar,
} from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
const useStyles = makeStyles((theme) => ({
  circle: {
    backgroundColor: blueGrey[50],
    borderRadius: "50%",
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "9.3rem",
    left: "6rem",
  },
  circle1: {
    backgroundColor: blueGrey[50],
    borderRadius: "50%",
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "9.3rem",
    left: "32rem",
  },
}));
function HomepageScreen3() {
  const classes = useStyles();
  return (
    <>
      <Header style={{ zIndex: 1 }} />
      <Grid
        container
        spacing={1}
        style={{
          height: "calc(100vh - 8rem)",
          position: "relative",
          width: "calc(100%)",
        }}
      >
        <Grid
          item
          style={{
            width: "100%",
            marginTop: "2rem",
            height: "20%",
            overflowX: "hidden",
            marginBottom: 0,
          }}
        >
          <Grid
            item
            style={{ position: "relative", left: "3.3rem", width: "40%" }}
          >
            <Typography variant="body1">Categories</Typography>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: "0rem" }}
          >
            <Grid item style={{ overflowX: "hidden", width: "40%" }}>
              <Typography
                variant="h3"
                style={{ marginLeft: "3.3rem", fontWeight: "bold" }}
              >
                Which categories interest you?
              </Typography>
            </Grid>
            <Grid item style={{ overflowX: "hidden" }}>
              <Typography
                variant="h5"
                align="right"
                color="primary"
                style={{
                  overflowX: "hidden",
                  display: "block",
                  marginRight: "3.3rem",
                  marginLeft: "1rem",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                View all categories
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          lg={12}
          style={{
            width: "80%",
            height: "73%",
            marginLeft: "3.2rem",
            marginRight: "2rem",
            marginBottom: "4rem",
          }}
        >
          <Grid
            container
            item
            lg={3}
            flex-direction="column"
            style={{ height: "100%" }}
          >
            <Grid item lg={12} style={{ height: "60%", overflowX: "hidden" }}>
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/5f8e/9b21/c6be40f330cbbc110f2e5a909e59f6ed?Expires=1684108800&Signature=OQqkNfjYgva6wWqqp6LlsO0hT2~XzE1sZ17y-arIntAaLMg9ZGapYwpBY7lltVm~MSsDF3H-LrVMAdZVREVRynjWcWMRgKKudKMT9u1iqQM7-cmY0BWDi2G16bSNGlda1N37Fo0CGu4R7euoIvmceU8MibEhiaCzSOdezAJhIO8KuE-8rSd07XX-1oq3bHJAppVYVrOGH62Uj~YVElhyfWU1JFZIY2h-cnLImS14e6-kttjrsNg12HKqiLf-ySwcS8HTtTkor-InzBc3w6uK-uBOIs8Pn5xMhGwgyDBgE35~kGhctmwOhHtrwuUuTKTw9veHl2EdMV1MfhuniNZweQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%" }}>
                  <div
                    style={{
                      position: "relative",
                      top: 20,
                      left: 20,
                      width: "50%",
                      height: "65%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      gutterBottom
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        width: "100%",
                        height: "100%",
                        fontFamily: "PP Neutra Montreal",
                        fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                        display: "inline-block",
                      }}
                    ></Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              style={{ height: "45%", marginTop: "-1rem", overflowX: "hidden" }}
            >
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/4dcf/afc1/1ab4574639c104bdfd3590d1353e3465?Expires=1684108800&Signature=Kv5V8vOPtaBY-Xuba1HFZDD4p7D5-5l9M6mqYCLtJsqKSbR0qYAduVS-J7z7JOGOpFXH1aqd4mG1i4oqclfLpN-wovEohu2W5VxlxSoQ0-xldxGUUMEkGBMyGvdbHdFfXr042ujyZX91xLJl99yhY5Jv2DgDtepa5J0gG1MJRfSlfFYFpQrhgzL5EStNt-bsMH3G1fMbqbsRVECQwkTksE9s6VfUz-0yxUTdriSl1PqNHaNCVWXFQOqsGeat0VxlNIZJh7Y0hrxVJ2q48SMIXVsUCMF~TJfjLP1O9PRKh5NCBx9KzkaD0BOEdpWT05YYl~vVrfdoJObUHyur0RfHpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%" }}>
                  <div
                    style={{
                      position: "relative",
                      top: 20,
                      left: 20,
                      width: "50%",
                      height: "65%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      gutterBottom
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        width: "100%",
                        height: "100%",
                        fontFamily: "PP Neutra Montreal",
                        fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                        display: "inline-block",
                      }}
                    ></Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={3}
            flex-direction="column"
            style={{ height: "100%" }}
          >
            <Grid item lg={12} style={{ height: "45%", overflowX: "hidden" }}>
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/ba7c/76bd/615a2866d81cb4922a67929925f20b22?Expires=1684108800&Signature=ZupBjv~j6bia8rpLTbylIQ0nzlci8Z7YdzlSR-xgbw9xnBUW5UC7WQk10z-V3xkcWC9mu5f0s0jvf1PMsfa9JHHxtUHXiXLjVDw-0ZKELEpYoPVbS2E9B4yeQgGX8B0gowuxIdzHSHB8~OEzolT6ObTsMCk7r4WobvfsSn31K8F1Q7itlAPDwqE6GPDoXOIcN9GKbTQ-q~COjLDML9m9ZcNjTBSvNFIe2XtuvsDkczJrtDz0pPUNO2nRNSEJrRgBQ~58ic-i~xd-5RVNQtAFxLC4MNthKXNF2i8xgDRu9NxWCbAL388rinON-60-OVhlvzC6pzMcEF-rBO7-UYa65w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%" }}>
                  <div
                    style={{
                      position: "relative",
                      top: 20,
                      left: 20,
                      width: "50%",
                      height: "65%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      gutterBottom
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        width: "100%",
                        height: "100%",
                        fontFamily: "PP Neutra Montreal",
                        fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                        display: "inline-block",
                      }}
                    ></Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              style={{
                height: "60%",
                marginTop: "-.5rem",
                overflowX: "hidden",
              }}
            >
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/0a7c/9fe6/3e5a972b2501284449cb36e9070ed544?Expires=1684108800&Signature=Tw2QaEOAaIxYXbzKDRrjy2hOXRUKyo9pid2Ypf5CZFrFAh4urnjeipTGPvWWreVdkQ2DSGu8NR53KgL3hkU8UTaInrN4h6QgbrLK6PaAnxk0Y7e9Vgv1k~LzY6Ic6~bnulk8MlLgKkEPZy0D6YEDHsADyi6IHh4WcmZ1eWOialmaOqY2HQZKMr-9NNHOgrQ0gEe4mbiFnksUORNnRxG3gA2gp78L9Y4x8gWOtr2ee6EeEjgjGQkXSoKumVWO3imt-dQ7nILCeDt7-mca1iLaV808R4wtASbphFWYLGnhjZh4R5w5P5zVC6vtnfQPrvTjzbb848t~ZPt-~H9V6VRkDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%" }}>
                  <div
                    style={{
                      position: "relative",
                      top: 20,
                      left: 20,
                      width: "50%",
                      height: "65%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      gutterBottom
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        width: "100%",
                        height: "100%",
                        fontFamily: "PP Neutra Montreal",
                        fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                        display: "inline-block",
                      }}
                    ></Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={3}
            flex-direction="column"
            style={{ height: "100%" }}
          >
            <Grid item lg={12} style={{ height: "60%", overflowX: "hidden" }}>
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/f77f/13e3/72319a5e2b644f20400002b33ef480ed?Expires=1684108800&Signature=AmKgvbs3Fsd8nilwzLBfBNW1e3MLAoBsmgtzJbnm2nm5Xk9uUgikJFcJJ~Jt12a2NBizAs70vpudg5lKVhlRh7EOq61BezvPKmXw1jMYQKsUjW~8acAXK2zI8vS0kuBR7LHBfYnQbVqgLtRn3b9na-g8OY3pZ8e~tnIxay8jc37WpO6-D37YSiuQBmtrP-IhuPu13SElAZVGwZ28Mn9fVab0Wtp6XQjxpuoKimxrkfOiH9pUNMIpCDNRnHdqTAiqK18kuQlajeJOan7O3jUAUBIIERIE43rG3jKXzQyhV1b217JP4loRWGIMkNEYHD6suVoujiP3cUpntW6nXTTB6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%" }}>
                  <div
                    style={{
                      position: "relative",
                      top: 20,
                      left: 20,
                      width: "50%",
                      height: "65%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      gutterBottom
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        width: "100%",
                        height: "100%",
                        fontFamily: "PP Neutra Montreal",
                        fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                        display: "inline-block",
                      }}
                    ></Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              style={{ height: "45%", marginTop: "-1rem", overflowX: "hidden" }}
            >
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/9a02/51d4/2159fb1d5e595969a0130391999c59f9?Expires=1684108800&Signature=WLLfDRhXXXGaoLc8fLQEvpxTnIwmubgMzKcMk95bMYOsTpM3p3KgGW7ptbA5QDEywROPrYYk9rCfIorll8f-D3Ir5HYVcqFO3ZfSDbcdbCCqgMLHsthoKcIi9awMfOH2PhJm59ZBmYXKAwFgWtN-zcBeWDsGmXjawdsK3jUlJgGO5tsnfX7Xn6QRZUdl0pj0ZhVIJUEo~q4OsSmDD5quhOBZmgWUcngyYPc6mmshrDMZipCOoWKQB4eJczAjm2CsCOcnxCbPIyxkmwIeJgc2qqck-nx0D60PsrmWd7DQfnx8L3-ghKOb0uDpYPoMK0ZA3cL7-PDeNg6By6zyomQKoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%" }}>
                  <div
                    style={{
                      position: "relative",
                      top: 20,
                      left: 20,
                      width: "50%",
                      height: "65%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      gutterBottom
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        width: "100%",
                        height: "100%",
                        fontFamily: "PP Neutra Montreal",
                        fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                        display: "inline-block",
                      }}
                    ></Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={3}
            flex-direction="column"
            style={{ height: "100%" }}
          >
            <Grid item lg={12} style={{ height: "45%", overflowX: "hidden" }}>
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/715e/0b56/3f681bee08c64246e052ba9dcfdff051?Expires=1684108800&Signature=oDWZLoXes9PhmhBlKEIBipqJ4v7P10GMlCDHfpR4RcK0buFtJA0s5rUnPNbHPFJ5c6fjCmLDk8fV8ySajDEQVvXsyd5RxcUcVOb1c1QFLA5S9YR4t916jcX-hTSAApLQ~t7eqSmwZLqlAJ-9MEGbp9OeM1rTITVIaiWGa8F3qEMR7c3XMSDxquTvXuezgzle5WhHPgAva7LRiYMQC9ugB~tEkbOF2VUTCreW2ijzdAInB7~CoE8VtAeA3b2dZ~j6N~LdVxnw6mO1WLq5ORaI~wRwztTqYc0~V3qDXOZPrb~ltWhTAIYzbeyDrh1sg5vBSMDiMxJ22T4a3NzHMEZz7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%" }}>
                  <div
                    style={{
                      position: "relative",
                      top: 20,
                      left: 20,
                      width: "50%",
                      height: "65%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      gutterBottom
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        width: "100%",
                        height: "100%",
                        fontFamily: "PP Neutra Montreal",
                        fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                        display: "inline-block",
                      }}
                    ></Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              style={{
                height: "60%",
                marginTop: "-.5rem",
                overflowX: "hidden",
              }}
            >
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/aad7/fab8/ab744a8b0a584d7628dfd2e7190d6d26?Expires=1684108800&Signature=nLCYUhUKEV0TC~~44BdItmJRTLiiIJiyPiSqc2S--uZgRN6iPTkMRZciSjAvWWT8EhPR24DOMv75FjJSU-lyiLU8OQWx13frqQA5Stxw2n4Wi~-4E3HNL-g-K96vd8NPTA-zwsgXTt~K3sTy7m9ZOWRrlIH0fAEqr1fLoOb-~4X1DiQ3lpdztIjMqJ3Zsk6dAYbyY-ZCC0cAi0SjOsmnaH86iDqP80mqj-YnDcGCjvqfxn5J94i2NJJEhC9aqcivVCJJx6Pw1bv2q~S5u44i~qYDQxMvRrW-~QJVrY7m1gzR6nmjFB94NGMrSObZWrU3d2HtKW6frPf3oafKCEXGyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%" }}>
                  <div
                    style={{
                      position: "relative",
                      top: 20,
                      left: 20,
                      width: "50%",
                      height: "65%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      gutterBottom
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        width: "100%",
                        height: "100%",
                        fontFamily: "PP Neutra Montreal",
                        fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                        display: "inline-block",
                      }}
                    ></Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
}

export default HomepageScreen3;
