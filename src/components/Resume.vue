<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12>
                <p>Hello there!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      bio_msg: 'I am tenacious, dedicated, and I empower those around me.',
      project_msg: "Check out what I've been working on!",
      exp_msg: "Do I have the skills you're looking for?  Check my resume and find out!"
    }
  }
}
</script>