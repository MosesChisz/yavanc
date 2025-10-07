import resp01 from "../../../assets/images/resp01.jpg";
import uro01 from "../../../assets/images/uro01.jpg";
import anes01 from "../../../assets/images/anes01.jpg";
import pvc01 from "../../../assets/images/pvc01.jpg";
import infu01 from "../../../assets/images/infu01.jpg";
import tube from "../../../assets/images/tube.png";
import tube1 from "../../../assets/images/tube1.png";
import drain from "../../../assets/images/drain.png";
import drain1 from "../../../assets/images/drain1.png";
import scico from "../../../assets/images/scico.png";

export const productData = [
  {
    id: 1,
    name: "Oxygen Concentrator",
    description: "High-flow oxygen therapy for patients with respiratory conditions",
    fullDescription: "Our advanced oxygen concentrator provides continuous, high-flow oxygen delivery for patients with chronic respiratory illnesses such as COPD and asthma. Designed with low-noise technology, energy efficiency, and built-in alarms for safety, this unit is essential in hospitals and home-care settings.",
    price: 1299.99,
    discountPrice: 1099.99,
    rating: 4.8,
    reviews: 54,
    image: resp01,
    images: [resp01],
    category: "respiratory",
    isNew: true,
    inStock: true,
    features: ["High Flow", "Low Noise", "Portable", "Built-in Safety Alarms"]
  },
  {
    id: 2,
    name: "Urinary Catheter Kit",
    description: "Sterile disposable catheter kit for urological use",
    fullDescription: "This urinary catheter kit includes a sterile catheter, lubricant, and collection bag. Made from medical-grade PVC, the kit is designed to reduce infection risk and improve patient comfort during short- or long-term catheterization procedures.",
    price: 24.99,
    discountPrice: 19.99,
    rating: 4.6,
    reviews: 32,
    image: uro01,
    images: [uro01],
    category: "urology",
    isNew: false,
    inStock: true,
    features: ["Sterile", "PVC Material", "Comfort Design", "Complete Kit"]
  },
  {
    id: 3,
    name: "Anesthesia Mask",
    description: "Reusable mask for safe anesthetic administration",
    fullDescription: "A soft, anatomically shaped mask designed to provide a secure seal during anesthesia administration. Made from non-toxic, medical-grade silicone, it ensures patient comfort and safety. Available in multiple sizes to fit pediatric and adult patients.",
    price: 49.99,
    discountPrice: null,
    rating: 4.7,
    reviews: 18,
    image: anes01,
    images: [anes01],
    category: "anesthesiology",
    isNew: true,
    inStock: true,
    features: ["Medical-grade Silicone", "Reusable", "Multi-size Options", "Secure Fit"]
  },
  {
    id: 4,
    name: "PVC Endotracheal Tube",
    description: "Disposable tube for airway management",
    fullDescription: "A sterile, single-use endotracheal tube made of high-quality PVC, designed for reliable airway management in operating rooms and emergency settings. The tube features a smooth, rounded tip and a high-volume cuff for effective sealing.",
    price: 9.99,
    discountPrice: 7.99,
    rating: 4.5,
    reviews: 65,
    image: pvc01,
    images: [pvc01],
    category: "pvc",
    isNew: false,
    inStock: true,
    features: ["Disposable", "High-volume Cuff", "Smooth Rounded Tip", "Sterile Packaging"]
  },
  {
    id: 5,
    name: "IV Infusion Set",
    description: "Complete set for intravenous fluid administration",
    fullDescription: "This IV infusion set includes a precision flow regulator, drip chamber, and needle, designed for safe and accurate delivery of IV fluids and medications. Compatible with standard IV bags and bottles.",
    price: 14.99,
    discountPrice: 12.99,
    rating: 4.4,
    reviews: 47,
    image: infu01,
    images: [infu01],
    category: "infusion",
    isNew: true,
    inStock: true,
    features: ["Precision Flow Regulator", "Drip Chamber", "Sterile", "Universal Compatibility"]
  },
  {
    id: 6,
    name: "2-way Extension Tube",
    description: "Medical PVC tubing",
    fullDescription: "Two Male luer connector at one end and one female luer connector at other end.",
    price: 9.99,
    discountPrice: 7.99,
    rating: 4.5,
    reviews: 65,
    image: tube,
    images: [tube],
    category: "tube",
    isNew: false,
    inStock: true,
    features: ["Disposable", "High-volume Cuff", "Smooth Rounded Tip", "Sterile Packaging"]
  },
  {
    id: 7,
    name: "Extension Tube",
    description: "Medical PVC tubing",
    fullDescription: "Two Male luer connector at one end and one female luer connector at other end.",
    price: 9.99,
    discountPrice: 7.99,
    rating: 4.5,
    reviews: 65,
    image: tube1,
    images: [tube1],
    category: "tube",
    isNew: false,
    inStock: false,
    features: ["Disposable", "High-volume Cuff", "Smooth Rounded Tip", "Sterile Packaging"]
  },
  {
    id: 8,
    name: "10000ml Drainage Bag",
    description: "Drainage Bag",
    fullDescription: "Drainage bags are storage bags that collect urine for individuals who cannot urinate on their own. they are suitable for people with urinary incontinence (leakage), urinary retention (not being able to urinate), surgery that made a catheter necessary, or another health problem.",
    price: 9.99,
    discountPrice: 7.99,
    rating: 4.5,
    reviews: 65,
    image: drain,
    images: [drain],
    category: "bags",
    isNew: false,
    inStock: false,
    features: ["Disposable", "High-volume Cuff", "Smooth Rounded Tip", "Sterile Packaging"]
  },
  {
    id: 9,
    name: "Enteral Feeding Bag",
    description: "Enteral Feeding Bag",
    fullDescription: "Enteral Feeding Bag has rigid neck for easy filling and handing. Strong, dependable handing ring. Easy to read Graduations and easy view translucent bag.",
    price: 9.99,
    discountPrice: 7.99,
    rating: 4.5,
    reviews: 65,
    image: drain1,
    images: [drain1],
    category: "bags",
    isNew: false,
    inStock: false,
    features: ["Disposable", "High-volume Cuff", "Smooth Rounded Tip", "Sterile Packaging"]
  },
  {
    id: 10,
    name: "Basic Tissue Dissection Surgical Instrument Set",
    description: "Basic Tissue Dissection Surgical Instrument Set",
    fullDescription: "Basic Tissue Dissection Surgical Instrument Set.",
    price: 9.99,
    discountPrice: 7.99,
    rating: 4.5,
    reviews: 65,
    image: scico,
    images: [scico],
    category: "scico",
    isNew: false,
    inStock: false,
    features: ["Disposable", "High-volume Cuff", "Smooth Rounded Tip", "Sterile Packaging"]
  },
];

// Updated categories
export const categories = [
  { id: "all", name: "All Products" },
  { id: "respiratory", name: "Respiratory Products" },
  { id: "urology", name: "Urology Products" },
  { id: "anesthesiology", name: "Anesthesiology Products" },
  { id: "pvc", name: "PVC Catheters" },
  { id: "infusion", name: "Infusion Products" },
  { id: "tube", name: "Tubes" },
  { id: "bags", name: "Drainage Bag" },
  { id: "scico", name: "Surgical Instrument" },
  { id: "adi", name: "Adson" },
];