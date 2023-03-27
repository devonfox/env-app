import Head from "next/head";
import {
  Box,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import ADSR from "@/components/ADSR";
import { useEffect } from "react";

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
            This project is intended to showcase my love for the simple
            knowledge that ADSR can bring. Also, to learn more about React,
            Next.js, and Front-end technologies.
          </Text>
        </Box>
        <Box>
          <ADSR />
        </Box>
        <Box>
          <Text as="i">&quot;ADSR is life!&quot;</Text>
        </Box>
      </main>
    </>
  );
}
