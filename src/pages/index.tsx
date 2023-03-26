import Head from "next/head";
import { Box, Text, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Toast from "@/components/Toast";
import SketchTest from "@/components/SketchTest";

export default function Home() {
  return (
    <>
      <Head>
        <title>Envelope App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box>
          <Text fontSize="3xl" fontWeight={"Bold"} mb={4}>
            Envelope App
          </Text>
          <Text>
            Currently, being worked on as a project to showcase my love for the
            simple knowledge that ADSR can bring. Also, to learn more about
            React, Next.js, and Front-end technologies.
          </Text>
        </Box>
        <Box bg="tomato" w="80%" p={6} color="white">
          <Text align={"center"}>ADSR Placeholder</Text>
        </Box>
        <Box>
          <SketchTest />
        </Box>
        <Box>
          <Text as="i">&quot;ADSR is life!&quot;</Text>
        </Box>
      </main>
    </>
  );
}
