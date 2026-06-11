import { Container, Typography, IconButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Footer = ({ data }) => {
  if (!data) return null;

  return (
    <footer className="bg-slate-900 text-white py-16">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {data.companyName}
            </Typography>

            <Typography variant="body2" className="text-gray-300">
              {data.description}
            </Typography>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>

            <ul className="space-y-2">
              {data.quickLinks?.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>

            <Typography className="text-gray-300 mb-2">
              <LocationOnIcon /> {data.address}
            </Typography>

            <Typography className="text-gray-300 mb-2">
              <EmailIcon />  {data.email}
            </Typography>

            <Typography className="text-gray-300 mb-4">
              <LocalPhoneIcon /> {data.phone}
            </Typography>

            {/* Social Links */}
            <div className="flex gap-2">
              <IconButton
                component="a"
                href={data.socialLinks?.facebook}
                target="_blank"
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                component="a"
                href={data.socialLinks?.linkedin}
                target="_blank"
                sx={{ color: "white" }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href={data.socialLinks?.twitter}
                target="_blank"
                sx={{ color: "white" }}
              >
                <TwitterIcon />
              </IconButton>

              <IconButton
                component="a"
                href={data.socialLinks?.instagram}
                target="_blank"
                sx={{ color: "white" }}
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center">
          <Typography variant="body2" className="text-gray-400">
            © {new Date().getFullYear()} {data.companyName}. All Rights
            Reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
