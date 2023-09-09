import {
  Box,
  Container,
  Typography
} from "@mui/material";
import React from "react";

export const TERMS = [
  {
    title: "1. Why are names registered as hashes?",
    desc: "Hashes provide a fixed length identifier that can easily be passed around between contracts with fixed overhead and no issues passing around variable-length strings.",
  },
  {
    title: "2. Which wallets and dapps support NibID?",
    desc: "TBD.",
  },
  {
    title: "3. Will I be able change the address my name points to after I’ve bought it?",
    desc: "Yes, you will be able to update the addresses and other resources pointed to by your name at any time.",
  },
  {
    title: "4. Can I register a TLD of my own in NibID?",
    desc: "No. We consider NibID to be part of the 'global namespace' inhabited by DNS, and so we do our best not to pollute that namespace. NibID-specific TLDs are restricted to only .nibi (testnet), plus any special purpose TLDs such as those required to permit reverse lookups.",
  },
  {
    title: "5. What about foreign characters? What about upper case letters? Is any unicode character valid?",
    desc: "Since the NibID contracts only deal with hashes, they have no direct way to enforce limits on what can be registered; character length restrictions are implemented by allowing users to challenge a short name by providing its preimage to prove it’s too short. This means that you can in theory register both ‘foo.nibi’ and ‘FOO.nibi’, or even <picture of my cat>.nibi. \n\n However, resolvers such as browsers and wallets should apply the nameprep algorithm to any names users enter before resolving; as a result, names that are not valid outputs of nameprep will not be resolvable by standard resolvers, making them effectively useless. Dapps that assist users with registering names should prevent users from registering unresolvable names by using nameprep to preprocess names being requested for registration.",
  },
  {
    title: "6. What are the differences between NibID and other naming services such as ENS, Unstoppable Domains, Namecoin, and Handshake?",
    desc: "NibID complements and extends the usefulness of existing name services with decentralized, trustworthy name resolution for web3 resources such as blockchain addresses and distributed content, while also paving the way for useful extensions like decentralized web hosting. Most other name services are efforts to replicate all or part of DNS with a blockchain-based alternative.",
  },
  {
    title: "About the .nibi Permanent Registrar",
    desc: "",
  },
  {
    title: "1. How does the NibID App know what names people are buying?",
    desc: "The NibID App reads events fired from the registrar's main controller. A subgraph organizes them into easily retrievable data for other dapps or libraries to use.",
  },
  {
    title: "2. What does it cost to register a .nibi domain?",
    desc: "Currently, registration costs are set at the following prices:\n ●  5+ character .nibi names: TBD \n ●  4 character .nibi names: TBD \n ●  3 character .nibi names: TBD\n●  3 and 4 character names have higher pricing to reflect the small number of these names available.\n \nWill be determined when launching on mainnet.",
  },
  {
    title: "3. What happens if I forget to extend the registration of a name?",
    desc: "After your name expires, there is a 90 day grace period in which the owner can't edit the records but can still re-register the name.\nAfter the grace period, the name is released for registration by anyone with a temporary premium which decreases over a 28-day period. The released name continues to resolve your Nibiru chain address until the new owner overwrites it.",
  },
  {
    title: "4. What kinds of behaviors are likely to result in losing ownership of a name?",
    desc: "The .nibi registrar is structured such that names, once issued, cannot be revoked so long as an active registration is maintained.",
  },
  {
    title: "About the registrar:",
    desc: "",
  },
  {
    title: "1. How many transactions are required to register a .nibi name?",
    desc: "The registrar uses one transaction to register a name.",
  },
  {
    title: "2. How long does it take to register a name using the .nibi registrar?",
    desc: "It is almost instantaneous.",
  },
  {
    title: "3. Do we need to do anything to ensure the continued use of existing NibID names?",
    desc: "Make sure you renew your names before they expire! You can add registration years to any name at any time, and for any duration you'd like.",
  },
  {
    title: "4. What happens if I have several NibID names with different renewal dates?",
    desc: "You can add registration years to many names at a time on your Home page in the NibID App.",
  },
  {
    title: "5. How do renewals work?",
    desc: "Anyone can add registration years to any existing name by paying the required fee, at any time. There is no maximum limitation of the renewal duration but there is a minimum renewal period of 28 days.",
  },
  {
    title: "6. Can someone grab my domains at the end of my subscription period?",
    desc: "You can renew your name at any time during the period you own it. Making sure you renew before the name expires will prevent someone else from registering the name.\n There is also a 'grace period' of 90 days after your name expires. You can renew the name to retain ownership of it during the grace period.",
  },
  {
    title: "7. How much will the yearly renewals cost?",
    desc: "TBD.",
  },
  {
    title: "8. What happens to the renewal fees? Do I get them back?",
    desc: "Rather than being locked and held, as in the original interim registrar, renewal fees in the permanent registrar are spent. You will not get them back.",
  },
  {
    title: "9. Where can I manage all my NibID names?",
    desc: "Simply go to our Dapp and click on `Home`.",
  },
  {
    title: "10. Can I trade my domains on NFT exchanges?",
    desc: "TBD.",
  },
];

type Props = {};
const Home: React.FC<Props> = () => {

  return (
    <Container
      sx={{
        paddingTop: "6vh",
        paddingBottom: "6vh",
        position: "relative"
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // alignItems: "center",
        width: "100%",
      }}>
        <Typography variant="h4" sx={{
          fontSize: "30px",
          fontWeight: "700",
        }}>
          Frequently Asked Questions
        </Typography>

        {TERMS.map((item) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "flex-start",
              paddingTop: '50px',
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "150%",
                fontStyle: "normal",
                paddingBottom: '30px',
              }}
            >
              {item.title}
            </Typography>

            {item.desc &&
              item.desc.split("\n").map((sentence) => (
                <Typography
                  sx={{
                    fontSize: { md: "24px", xs: "20px" },
                    fontWeight: "400",
                    lineHeight: "normal",
                    fontStyle: "normal",
                    color: "#fff",
                    paddingTop: '10px',
                  }}
                >
                  {sentence}
                </Typography>
              ))}
          </Box>
        ))}
      </Box>
    </Container >
  );
}


const testDomainInfo: any[] | (() => any[]) = [
  // {
  //   domainName: "punk.cmdx",
  //   expiredDate: "20 Sep 2023 1:16:59",
  // },
  // {
  //   domainName: "meme.cmdx",
  //   expiredDate: "20 Sep 2023 1:16:59",
  // },
  // {
  //   domainName: "token.cmdx",
  //   expiredDate: "20 Sep 2023 1:16:59",
  // },
  // {
  //   domainName: "character.cmdx",
  //   expiredDate: "20 Sep 2023 1:16:59",
  // },
];

export default Home;