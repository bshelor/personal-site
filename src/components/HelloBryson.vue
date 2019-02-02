<template>
  <v-container fluid back size>
      <v-layout align-center justify-space-around row fill-height>
        <v-flex xs3>
          <v-card height="35vh">
            <v-img class="card-img" src="https://image.shutterstock.com/image-photo/business-lawyer-working-hard-office-260nw-618162155.jpg"></v-img>
            <v-card-title primary-title>
              <h3>{{ bio_msg }}</h3>
            </v-card-title>
            <v-card-actions>
              <v-layout justify-center>
                <v-btn flat color="blue">Read Full Bio</v-btn>

                <div class="LinkedIn_link">
                  <v-btn flat href="https://www.linkedin.com/in/bryson-shelor-a35401129/" target="_blank" color="blue">
                    LinkedIn
                    <v-avatar size=30>
                      <img src="../assets/linkedin-2.png" alt="avatar">
                    </v-avatar>
                  </v-btn>
                </div>

              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs3>
          <v-card height="35vh">
            <v-layout row>
              <v-flex xs4>
                <v-img class="card-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Jeopardy_Germany_2016_logo.jpg"></v-img>
              </v-flex>
              <v-flex xs4>
                <v-img class="card-img" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/31720031_2071363066420109_3803502456130764800_n.png?_nc_cat=103&_nc_ht=scontent-ort2-1.xx&oh=47a8b13d4690d4b762be3c70ee47f04a&oe=5CF95DA1"></v-img>
              </v-flex>
              <v-flex xs4>
                <v-img class="card-img" src="../assets/qttc_logo.png"/>
              </v-flex>
            </v-layout>
            <v-card-title primary-title>
              <v-layout justify-center>
                <h3 align-text-center>{{ project_msg }}</h3>
              </v-layout>
            </v-card-title>
            <v-card-actions>
              <v-layout justify-center align-end>
                <v-btn flat color="blue">All Projects</v-btn>
              </v-layout>
            </v-card-actions> 
          </v-card>
        </v-flex>

        <v-flex xs3>
          <v-card height="35vh">
            <v-img class="card-img" src="https://image.shutterstock.com/image-photo/business-lawyer-working-hard-office-260nw-618162155.jpg"></v-img>
            <v-card-title primary-title>
              <h3>{{ exp_msg }}</h3>
            </v-card-title>
            <v-card-actions>
              <v-layout justify-center>
                <v-btn flat color="blue">Resume</v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>

        
      </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloBryson',
  data () {
    return {
      bio_msg: 'I am tenacious, dedicated, and I empower those around me.',
      project_msg: "Check out what I've been working on!",
      exp_msg: "Do I have the skills you're looking for?  Check my resume and find out!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.back {
  background-image: url("../assets/IMG_2483_cropped.jpg");
  background-size: cover;
  object-fit: none;
  object-position: 100% 50%;
}
.size {
  height: 100vh;
  width: 100vw;
}
.height-fill {
  height: 33vh;
}

.card-img {
  height: 20vh;
  object-fit: none;
  object-position: 100% 50%;
}

</style>
