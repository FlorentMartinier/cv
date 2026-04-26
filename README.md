# 📄 Dynamic CV - Florent Martinier

This project is an interactive and PDF-exportable Resume generator, built with **Angular 17** and **Tailwind CSS**. The CV content is entirely driven by a JSON configuration file, allowing for instant updates without modifying the HTML code.

## 🔗 Live Demo
You can view a live example of the rendered project here:  
**[https://cv-florent-martinier.netlify.app/](https://cv-florent-martinier.netlify.app/)**

## 🚀 Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the development server:
   ```bash
   ng serve
   ```
4. Open your browser at `http://localhost:4200`.

---

## 🌍 Internationalization (i18n)

The application automatically detects the browser's language and loads the corresponding data.
- **English:** Loads `src/assets/data/cv-en.json`
- **French:** Loads `src/assets/data/cv-fr.json`

To add an experience or modify a skill, **you must update both files** to keep the CV consistent across languages.

## 🛠 JSON Structure Documentation

### 1. `labels` (UI Translation)
This section contains all static text used in the layout to ensure the entire interface switches languages.

| Field | Description |
| :--- | :--- |
| `experience` | Title for the Work Experience section. |
| `education` | Title for the Education section. |
| `projects` | Title for the Personal Projects section. |
| `contact` / `languages` / `skills` | Sidebar section titles. |
| `seeProject` | Label for the project action buttons. |

### 2. `personalInfo` (Identity & Contact)
| Field | Description | Example / Format |
| :--- | :--- | :--- |
| `title` | Resume headline with variable. | `"Senior Developer, {{years}} years..."` |
| `firstJobDate` | Career start date (for calculation). | `"YYYY-MM-DD"` |
| `birthDate` / `nationality` | Personal details (translated in each JSON). | `string` |

### 3. `experiences` & `education`
| Field | Description | Format |
| :--- | :--- | :--- |
| `title` / `degree` | Position or Diploma name. | `string` |
| `company` / `school` | Institution name. | `string` |
| `description` | Details (Bullet points for exp, single string for edu). | `Array<string>` or `string` |
| `stack` | Technologies (only in experiences). | `Array<string>` |

### 4. `projects` & `languages`
| Field | Description | Format |
| :--- | :--- | :--- |
| `name` | Project or Language name. | `string` |
| `description` | Brief overview (Project). | `string` |
| `level` | Proficiency level (Language). | `string` (e.g., "Native", "B1") |

---

## 💡 Technical Implementation

### Dynamic Experience Calculation
The `{{years}}` placeholder in the `title` field is dynamically replaced by the Angular component. It calculates the number of years between the current date and the `firstJobDate` defined in the JSON.

### PDF Generation
The project uses `html-to-image` and `jsPDF`. To ensure a low file size (< 2MB), the PDF is generated using 85% JPEG compression.

> [!IMPORTANT]  
> **Note on Responsive Design:** This project is specifically designed and optimized for **Desktop screens**. The layout and PDF export functionality are tailored for a computer-based viewing experience to maintain the integrity of a professional A4 resume format. It is not intended for mobile screen usage.

---

## 🎨 Design Customization
The UI is styled with **Tailwind CSS**. You can update the main colors in `src/app/cv/cv.component.html` by changing utility classes (e.g., `bg-slate-800`).