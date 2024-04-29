import React, { useState } from 'react';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './styles';
import Span from '../span';

interface CheckboxProps {
  labelText: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ labelText }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<label style={{ display: "flex", gap: "5px", alignItems: "center" }}>
			<CheckboxContainer>
				<HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
				<StyledCheckbox checked={isChecked} />
			</CheckboxContainer>
			<Span color="#fff" size="14px">{labelText}</Span>
		</label>
	);
};

export default Checkbox;
