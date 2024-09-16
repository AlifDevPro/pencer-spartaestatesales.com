import { useState } from 'react';
import api from '@/libs/api';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDateRange } from 'react-icons/md';
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Button from '@/components/global/button/button';
import styles from './form.module.scss'; 

interface FormData {
  scheduled: any;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectDescription: string;
  timeline: string;
  comments: string;
  howHeard: string[];
  terms: boolean;
  privacyPolicy: boolean;
}

export default function SchedulerForm({ schedule }: { schedule: any }) {
  const [formData, setFormData] = useState<FormData>({
    scheduled: schedule,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectDescription: '',
    timeline: '',
    comments: '',
    howHeard: [],
    terms: false,
    privacyPolicy: false,
  });
  const [loading, setLoading]=useState<boolean>(false)

  const handleValidation = () => {
    const {firstName, email, phone, projectDescription, timeline, privacyPolicy, terms} = formData
    if (!firstName || !email || !phone || !projectDescription || !timeline || !privacyPolicy || !terms) {
      if (!firstName) toast.error("First Name is required.");
      if (!email) toast.error("Email is required.");
      if (!phone) toast.error("Phone number is required.");
      if (!projectDescription) toast.error("Project Description is required.");
      if (!timeline) toast.error("Timeline is required.");
      if (!privacyPolicy) toast.error("You must agree to the policy.");
      return false;
  }
  return true;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!handleValidation()) return;

    try {
      setLoading(true);
      const res = await api.post(`/schedule`, formData);
      setFormData({
        scheduled: schedule,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectDescription: '',
        timeline: '',
        comments: '',
        howHeard: [],
        terms: false,
        privacyPolicy: false,
      });
      setLoading(false);
      toast.success(res.data);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setLoading(false)
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkboxValue = (e.target as HTMLInputElement).checked;
      const updatedHowHeard = checkboxValue
        ? [...formData.howHeard, value]
        : formData.howHeard.filter((item) => item !== value);

      setFormData((prevData) => ({
        ...prevData,
        howHeard: updatedHowHeard,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? !prevData[name as keyof FormData] : value,
      }));
    }
  };

  const date: any = new Date(schedule);
  const datePart: string = date.toDateString();
  const timePart: string = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const timezoneNamePart = Intl.DateTimeFormat(undefined, {
    timeZoneName: 'long',
  })
    .formatToParts()
    .find((part) => part.type === 'timeZoneName');
  const timezoneName: string = timezoneNamePart ? timezoneNamePart.value : 'Unknown';

  return (
    <form
      className={styles.formContainer}
    >
      <div className={`${styles.header}`}>
        <h2>Scheduled Date:</h2>
        <div className={`${styles.dateTimeContainer}`}>
          <div className={`${styles.icon}`}>
            <IoMdTime />
          </div>
          <span>{timePart}</span>
          <div className={`${styles.icon}`}>
            <MdDateRange />
          </div>
          <span>{datePart}</span>
          <div className={`${styles.icon}`}>
            <IoLocationSharp />
          </div>
          <span>{timezoneName}</span>
        </div>
      </div>

      <div className={styles.fullName}>
        <div className={`${styles.formSection}`}>
          <div className={`${styles.label}`}>First Name *</div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`${styles.inputField}`}
            required
          />
        </div>

        <div className={`${styles.formSection}`}>
          <div className={`${styles.label}`}>Last Name</div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`${styles.inputField}`}
            required
          />
        </div>
      </div>

      <div className={`${styles.formSection}`}>
        <div className={`${styles.label}`}>Email *</div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.inputField}`}
          required
        />
      </div>

      <div className={`${styles.formSection}`}>
        <div className={`${styles.label}`}>Phone Number *</div>
        <PhoneInput
          inputStyle={{
            width: '100%',
            outlineColor: 'red',
            outlineWidth: '2px',
            padding: "1.2rem 8px"
          }}
          defaultCountry="us"
          value={formData.phone}
          onChange={(phone) => setFormData((prevData) => ({ ...prevData, phone }))}
        />
      </div>

      <div className={`${styles.formSection}`}>
        <div className={`${styles.label}`}>Description *</div>
        <textarea
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          className={`${styles.inputField}`}
          rows={4}
          required
        />
      </div>

      <div className={`${styles.formSection}`}>
        <div className={`${styles.label}`}>Timeline *</div>
        <input
          type="date"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className={`${styles.inputField}`}
          required
        />
      </div>

      <div className={`${styles.formSection}`}>
        <div className={`${styles.label}`}>Additional Comments/Questions</div>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className={`${styles.inputField} ${styles.comments}`}
          rows={4}
        />
      </div>

      <div className={`${styles.formSection}`}>
        <div className={`${styles.label}`}>How did you hear about us?</div>
        <div className={`${styles.checkboxContainer}`}>
          <input
            type="checkbox"
            name="howHeard"
            id='google-search'
            value="google-search"
            onChange={handleChange}
            className={`${styles.checkbox}`}
          />
          <label htmlFor="google-search" className={`${styles.checkboxLabel}`}>Google Search</label>
        </div>
        <div className={`${styles.checkboxContainer}`}>
          <input
            type="checkbox"
            id='social-media'
            name="howHeard"
            value="social-media"
            onChange={handleChange}
            className={`${styles.checkbox}`}
          />
          <label htmlFor="social-media" className={`${styles.checkboxLabel}`}>Social Media</label>
        </div>
        <div className={`${styles.checkboxContainer}`}>
          <input
            type="checkbox"
            name="howHeard"
            id='referral'
            value="referral"
            onChange={handleChange}
            className={`${styles.checkbox}`}
          />
          <label htmlFor="referral" className={`${styles.checkboxLabel}`}>Referral</label>
        </div>
      </div>

      <div className={`${styles.formSection}`}>
        <div className={`${styles.checkboxContainer}`}>
          <input
            type="checkbox"
            name="terms"
            id='termsOne'
            checked={formData.terms}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, terms: e.target.checked }))
            }
            required
            className={`${styles.checkbox}`}
          />
          <label htmlFor='termsOne' className={`${styles.checkboxLabel}`}>I agree to the terms and conditions</label>
        </div>
        
        <div className={`${styles.checkboxContainer}`}>
          <input
            type="checkbox"
            id='privacyPolicy'
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, privacyPolicy: e.target.checked }))
            }
            required
            className={`${styles.checkbox}`}
          />
          <label htmlFor='privacyPolicy' className={`${styles.checkboxLabel}`}>I agree to the privacy policy</label>
        </div>
      </div>

      <div className={`${styles.buttonContainer}`} onClick={handleSubmit}>
        <Button varient="primary" lebel="Submit" style={{width:"100%"}} loading={loading}/>
      </div>
    </form>
  );
}