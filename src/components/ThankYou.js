
import * as React from "react";
import { Grid, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import mail from "../images/Mailim.png";

export default function Contact() {
  return (
    <Card
            style={{  borderRadius: "1.5rem", display: "flex",height:"80%",width:"83rem",boxShadow:'none',backgroundColor:'#FFFFFF' }}
          >
              <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <div>
                    <img src={mail} style={{height:"100%",width:"40rem",marginLeft:"1.875rem"}}/>
                  </div>
                  <div>
                    <Typography variant="h4" style={{width:"40rem", marginLeft:"1.875rem"}}>
                            Thank You for your message.<br></br>Shuru will get back to you shortly.
                    </Typography>
                  </div>
              </div>

            {/*<Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "450px",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                    }}
                  >
                    <div style={{ marginBottom: "15px" }}>
                      <Typography component="div" color="blue" focused style={{ fontSize: "18px", marginBottom:"5px", marginLeft:"5px"}}>
                        First Name:
                      </Typography>
                      <TextField
                        className={classes.TextfieldY}
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                      <Typography style={{ fontSize: "18px", marginBottom:"5px" , marginLeft:"5px"}} component="div">
                        Last Name:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>
                    <div>
                      <Typography style={{ fontSize: "18px" , marginBottom:"5px",marginLeft:"5px"}} component="div">
                        Email:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px"}}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: "flex",
                }}
              >
                <CardContent style={{ paddingBottom: "0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "470px",
                      justifyContent: "space-between",
                      marginTop:"20px"
                    }}
                  >
                    <Typography style={{ fontSize: "18px", marginBottom:"5px" }} component="div">
                      Your Message :
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      multiline
                      rows={14}
                      style={{
                        backgroundColor:blueGrey[50]
                      }}
                    />
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => setIsSubmitted(true)}
                    style={{
                      backgroundColor: "#D3E938",
                      color: "white",
                      borderRadius: "5px",
                      float: "right",
                      width:"120px",
                      marginTop: "10px",
                      boxShadow:"none"
                    }}
                  >
                    Submit
                  </Button>
                </CardContent>
              </Grid>
            </Grid>*/}
          </Card>
  );
}
