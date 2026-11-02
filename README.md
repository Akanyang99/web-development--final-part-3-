# Harvest of Hygiene NPO Website - Part 3

**Student:** ST10538510 - Akanyang Montshiwa  
**Module:** WEDE5020 / ST100 - Web Development  
**Live Site:** https://akanyang99.github.io/web-development--final-part-3-/  
**Repo:** https://github.com/Akanyang99/web-development--final-part-3-  
**NPO:** Harvest of Hygiene | Reg: 234-567 NPO | Pretoria, Gauteng (Founded 2024)  
**Group:** 07 | ST100 |

## Project Overview
A responsive 5-page website for a Pretoria-based NPO fighting period poverty in Gauteng schools (Soweto, Tembisa). Built to end girls missing school due to lack of sanitary products. Each sanitary pack costs R50 and contains Bodyform pads, Nivea deodorant, soap, tissues, and education booklet.

The site was built in 3 parts: Part 1 HTML structure, Part 2 CSS responsive + SEO, Part 3 JS interactivity and deployment.

## Part 3 - JavaScript Interactivity (This Submission)

### ✅ Implemented Features (All Required - Verified on Mobile LTE)

**1. Helper Functions (Slide 41 Requirement) - MUST BE AT TOP OF js/script.js**
```js
function showError(element, message) { 
  element.textContent = message; 
  element.style.display = 'block'; 
  element.style.color = 'red'; 
}
function clearError(element) { 
  element.textContent = ''; 
  element.style.display = 'none'; 
}
