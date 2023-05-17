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
function HomepageScreen8() {
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
            <Typography variant="body1">Partners</Typography>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: "0rem" }}
          >
            <Grid item style={{ overflowX: "hidden", width: "40%" }}>
              <Typography
                variant="h2"
                style={{ marginLeft: "3.3rem", fontWeight: "bold" }}
              >
                Our Partners
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
            height: "60%",
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
            <Grid item lg={12} style={{ height: "50%", overflowX: "hidden" }}>
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%", display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <div
                    style={{
                      position: "relative",
                      margin:'auto',
                      width: "60%",
                      height: "35%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="https://s3-alpha-sig.figma.com/img/a5b8/2a9a/11ec2641b99101527ada25ae49ba2b9c?Expires=1684713600&Signature=HW2Ibdon2eFjRHDZKuKDLyR-XhTXq4A1xON3XNSEn3Nb42fP7R8pMBiuluQM6ly3GJXENU-HObQYWCmWN8cpCJjE3UgsYoLsciCuU2cdjNjI7KViVH0HmVF5TwI8XdyHrb1YlAQulFT9mftoy1~Rrng~YgpyUCGjYmOsxSf2hTRRV5jmkUHdqWS2jq5SYbmFe9D21w0aIMe5VxlrvgsP-MfZcvVpJ0pWo6r~ZkY8zp0ImwNJIuoRYBfcX7fuJIBdIoXYjAIeJm1A-MtVYqC~qJQMK1rf7s5kjJc-SCM1k3Vku4s18fLlpS~hnlrwIZDvCg27JOnuu4M-dsr~HfKG~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'100%',height:'100%',backgroundPosition:'center',backgroundSize: "cover"}} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              style={{ height: "50%", marginTop: "-1rem", overflowX: "hidden" }}
            >
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%", display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <div
                    style={{
                      position: "relative",
                      margin:'auto',
                      width: "75%",
                      height: "40%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="https://s3-alpha-sig.figma.com/img/6ecd/00f1/26ebd0640f54df2e6fd9f62788ddcf33?Expires=1684713600&Signature=FYA7lT5zJK3s9t4tzX0M-pb9qWhULXilsuLYU4x1Grx7I0Wq4oDGT49NFxEOi~o3mn1KvNlm6NXkMnltGkW4FKJanVwusVj-691OJZZjtSnpC48~Dm5MwtQfFklLYzMOf8nQ-lCw6XpFrqA6F8d6nQ33vChjbw~UxFE7Ckdb49z68ExHAS3Zm7z8-DxgzNqGpcKCGBIQDOAwzxqkV1Mk54LbMqRdCncQwFjq7UYV6fu~qk9MNUMyoOGt6WczbxAqqLzXiD~MhmSFEeWQHZZZ8xWVJ87u07Y4adN9Jn0t7k0vJqmc0OUzlYgqSeV2BiQbV0fc-6zTWm3eWQKTAvG4Pg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'100%',height:'100%',backgroundPosition:'center',backgroundSize: "cover"}} />
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
            <Grid item lg={12} style={{ height: "50%", overflowX: "hidden" }}>
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%", display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <div
                    style={{
                      position: "relative",
                      margin:'auto',
                      width: "60%",
                      height: "35%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="https://s3-alpha-sig.figma.com/img/3a33/5397/6529f45ddd72294b84e34b4329a9b945?Expires=1684713600&Signature=ciDw9RyiWxkQJhu9EhAi25E7xFayx3Q02LI2TncQdP~ERvP~T61VVnowPNdDnPfDePAngEqgn~XDSAIXfGw2W8UOr6nwVwkAwxu-l~t1pu9FfbSdQAwaXkR15-WivE9guxDEpaSUIEFTFdUgWGBZCyPO8wScpagvF7JnUoCWnizizMgndjglbwg9OJv-6sSbTW9z-ttrKht8LzzjL5p4w5S2J6vm9KeRCbxVTkuGF3WcL92g88KkXNBxNY-jQ-DWifGYboSKgXsSVFg4E5g80DAtZ~aK5wkFI3gpCJdwkaPb3I7GDYYW4KQa9shFHdX2b03a10ln1s9VwjtFsWUKQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'100%',height:'100%',backgroundPosition:'center',backgroundSize: "cover"}} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              style={{
                height: "50%",
                marginTop: "-.5rem",
                overflowX: "hidden",
              }}
            >
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                 
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%", display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <div
                    style={{
                      position: "relative",
                      margin:'auto',
                      width: "60%",
                      height: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="https://s3-alpha-sig.figma.com/img/e00d/2d46/7469c4834f2d2be542d0603cb1f73dda?Expires=1684713600&Signature=Qh0YmiYSm0lTEdBX-pE2DKWCUPtLJtMk8UEUypL5l1wFuEjAWtnBBmdYiTFalgy4yn2YQ~dmCml1Sb51ihzGBFkpQ32f4Hl9QKRdhvZSAPnVgB1yoFUIMb~NYfxLavdXayj5JOGl~ki13F0T3o88WiVj1B5a0~k7BVrP1DBwTnVdx-NtGPTZEtSh6Ak82j4eTHbUGDgTtyhFacr~gpVJC-GODNGdz6ykM3IkAfmLDABGeR87lbepoPbwB6adHhZ8Ao00hQmG5c0kk~1HtHxZeou4zXkqnT8Vt6HyI0-fDcFQe4MLpWVXeCa392U3MUnkd339YUGuCZ4985CQOV20Qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'100%',height:'100%',backgroundPosition:'center',backgroundSize: "cover"}} />
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
            <Grid item lg={12} style={{ height: "50%", overflowX: "hidden" }}>
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                 
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%", display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <div
                    style={{
                      position: "relative",
                      margin:'auto',
                      width: "60%",
                      height: "35%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="https://s3-alpha-sig.figma.com/img/2d42/57e6/ffa8c229087b76612d4346ba098bd63e?Expires=1684713600&Signature=H7PIz2NX9Z2F2tWrGNSmWy6F0e~LOOIF9kKbv6gKA2Ew96u1OO7oSOw-BXbN2NkEafghz1X9DZrsN6pYqUczzuWRiZVLxFiHpwuOR~uCqkABX9IcmkAMvH6CjlLxY6C7YhNGvgCbiEwR3mGyvb2TGpAziImtNNBZj0B~qLqg-m4ceDS3dDau3qeDejYx4nzMIFmyIBjDwN1O19u8QNK3R6HMmCRubCfN9thWjoYljtp~SMKIiTjsWToulgQ2cL33UBtD7Ewj2IfHVjId3kz3jF7tt5apjRQ67nfdcqU5ZMZDtgHTTpbWz2yFs3tI3n3Ez6CXzGGwRUckr5Hqz4XkOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'100%',height:'100%',backgroundPosition:'center',backgroundSize: "cover"}} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              style={{ height: "50%", marginTop: "-1rem", overflowX: "hidden" }}
            >
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%", display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <div
                    style={{
                      position: "relative",
                      margin:'auto',
                      width: "60%",
                      height: "57%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="https://s3-alpha-sig.figma.com/img/4564/9df5/ef0bd455e3376ca901865bda860b3897?Expires=1684713600&Signature=q-lw2Tllq8C60V9Ee198vmfqW89ckjngsJ-gsRnFU6yk~~nvgUmm2ZOx08OFrakElxR3TkZNO5-2GwRgDKmRc2~9s2VlJdDaiTGCbb77KTc3SH1XxkuzaaOsk7D0okRxbNTV2bfGLpjdPNqb1cZiyD5tkmfqVLBz8TLvOrWXrU5AiQpxqZ0ooVlRzcLn1J0wOmDcZoZsdfxIoaoY8luXu-QylYm9SQF3kTFtj9WtcSMXpbsXUDVM99CKbo1wUtf8AePR0vpFUifhQfYeFQ4o9-YY36EvjYodgb1mPPWDy1o7hZ4yL2GLNQ9mbxpiEa2a-tf2ETgAKxNE3MoGuvOpXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'100%',height:'100%',backgroundPosition:'center',backgroundSize: "cover"}} />
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
            <Grid item lg={12} style={{ height: "50%", overflowX: "hidden" }}>
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                 
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%", display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <div
                    style={{
                      position: "relative",
                      margin:'auto',
                      width: "60%",
                      height: "35%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="https://s3-alpha-sig.figma.com/img/6371/3106/41189f4a2cd979f0c0835fd7b6d09fb2?Expires=1684713600&Signature=qDYy~V2967WxxwM7aJEPND6ePtO52KdbLzYYqRLLDal5A2qBpMhBdOs6Cw3L7aDtLv6JNOZHtoJ9UgjjsLid80xGy4vnkqnNaWD7xKmCQrKQDb0J6dfks9N8MsoTHfdhjg-Cv33XA8Tehl3VbTKSse8smK5--8Y0B-7e5QhIPiepQF0RgdUknnlq8qM3ldfKf~zgSUiSDLXpCd4Pfv51Fj8rjI1pilBbO5CPUDnW1nyyGDCjauqAgFeKk1Vdy9xj5TfrsybVmNuC6HooGlrUQOHFhqdFaytc~ja8g5R4Gx862RfBx4rvl18JYFB2jcPCWi6ppjALNGRW-v9zREg6Vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'100%',height:'100%',backgroundPosition:'center',backgroundSize: "cover"}} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              style={{
                height: "50%",
                marginTop: "-.5rem",
                overflowX: "hidden",
              }}
            >
              <Card
                style={{
                  height: "90%",
                  borderRadius: "2rem",
                  
                  marginRight: "1.25rem",
                }}
              >
                <CardContent style={{ position: "relative", height: "90%", display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <div
                    style={{
                      position: "relative",
                      margin:'auto',
                      width: "67%",
                      height: "35%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="https://s3-alpha-sig.figma.com/img/42c3/ed2b/6b40b309c9a09f2d333598b1c0e1201a?Expires=1684713600&Signature=bpvPi5zXS4jaB~Xc0Xo~g1-PLYceIQ-xi7ZjJmM90ZWVNt1EFPSfZyZevNHF2dxYwyl4WHa6uLP8RwNpxvQGpK~bUXksGnb0EWPhdvU8qOvhlKifQ7Sm~Bqc-4GLt622NsASbdNuZnVQ29oRtFBBXVV42YAhWLgh1DPgsALXaovpIG1SmD~5LH9e7JA6S1gtQ~W9ZTaUWragG9NWy7T~d1gyzvST~ZbUhic9wAbXm2lY-d5vFGOB5fMB6kjTpIBNc9LynkDSgYgEwh1wtWERPNT1tSDGKspMuE76Ni7mw~9kDmBxaGQGc3GhiWjSMzprsHKR2OVEv4w3qAS4oWILYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'100%',height:'100%',backgroundPosition:'center',backgroundSize: "cover"}} />
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

export default HomepageScreen8;
