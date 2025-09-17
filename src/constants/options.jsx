// ICONS :
import { FaTiktok } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillWechat } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

const CategoriesArray = [
    { label: "Electronics", value: "Electronics" },
    { label: "Clothing and Fashion", value: "Clothing and Fashion" },
    { label: "Home and Furniture", value: "Home and Furniture" },
    { label: "Beauty and Personal Care", value: "Beauty and Personal Care" },
    { label: "Books and Media", value: "Books and Media" },
    { label: "Food and Groceries", value: "Food and Groceries" },
    { label: "Health and Wellness", value: "Health and Wellness" },
    { label: "Toys and Games", value: "Toys and Games" },
    { label: "Jewelry and Accessories", value: "Jewelry and Accessories" },
    { label: "Sports and Outdoor Gear", value: "Sports and Outdoor Gear" },
    { label: "Automotive and Parts", value: "Automotive and Parts" },
    { label: "Art and Collectibles", value: "Art and Collectibles" },
    { label: "Pet Supplies", value: "Pet Supplies" },
    { label: "Office and School Supplies", value: "Office and School Supplies" },
    { label: "Electrical Appliances", value: "Electrical Appliances" },
    { label: "Baby and Kids' Products", value: "Baby and Kids' Products" },
]
const SocialMediaArray = [
    { name: "Twitter", fill: "#00acee", icon: AiOutlineTwitter, size: "20px" },
    { name: "Facebook", fill: "#3b5998", icon: FaFacebookF, size: "20px" },
    { name: "LinkedIn", fill: "#0072b1", icon: FaLinkedinIn, size: "18px" },
    { name: "Instagram", fill: "rgb(228, 64, 95)", icon: AiFillInstagram, size: "22px" },
    { name: "Youtube", fill: "#CD201F", icon: BsYoutube, size: "20px" },
    { name: "Tiktok", fill: "#000000", icon: FaTiktok, size: "20px" },
    { name: "Wechat", fill: "#09B83E ", icon: AiFillWechat, size: "22px" },
    { name: "whatsApp", fill: "#09B83E ", icon: IoLogoWhatsapp, size: "22px" },
]
export {
    CategoriesArray,
    SocialMediaArray
}