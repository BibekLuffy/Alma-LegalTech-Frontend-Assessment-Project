import {
  FormDataType,
  FormErrorType,
  HandleChangeType,
  SetFormDataType,
} from "./types";
import CountrySelect from "./CountrySelect";
import { InputDefaultCN, InputErrorCN } from "./leadFormStyles";

const Credentials = ({
  formData,
  errors,
  handleChange,
  setFormData,
}: {
  formData: FormDataType;
  errors: FormErrorType;
  handleChange: HandleChangeType;
  setFormData: SetFormDataType;
}) => {
  return (
    <div>
      <input
        type="text"
        id="small-input"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={InputDefaultCN}
      />
      {errors.firstName && <p className={InputErrorCN}>{errors.firstName}</p>}

      <input
        type="text"
        id="small-input"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className={InputDefaultCN}
      />
      {errors.lastName && <p className={InputErrorCN}>{errors.lastName}</p>}

      <input
        type="email"
        id="small-input"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={InputDefaultCN}
      />
      {errors.email && <p className={InputErrorCN}>{errors.email}</p>}

      <CountrySelect
        value={formData.country}
        handleChange={(name, value) => {
          setFormData(name, value);
        }}
      />

      <input
        type="url"
        id="small-input"
        placeholder="LinkedIn / Personal Website URL"
        name="linkedIn"
        value={formData.linkedIn}
        onChange={handleChange}
        className={InputDefaultCN}
      />
      {errors.linkedIn && <p className={InputErrorCN}>{errors.linkedIn}</p>}
    </div>
  );
};

export default Credentials;
