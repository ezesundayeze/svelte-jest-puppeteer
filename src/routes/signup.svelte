<script>
	import { useForm, validators, HintGroup, Hint, email, required } from 'svelte-use-form';
	import '../signup.css';

	const form = useForm();
</script>

<form use:form>
	<h1>Signup</h1>
	<label for="Email" class="label-email">
		<input
			type="email"
			use:validators={[required, email]}
			class="text"
			id="email"
			name="email"
			placeholder="Email"
			required
		/>
		<span class="required">Email</span>
	</label>
	<HintGroup for="email">
		<Hint on="required" class="email-required-hint">Email is required</Hint>
		<Hint on="email" class="email-hint" hideWhenRequired>Email is not valid</Hint>
	</HintGroup>

	<div>
		<label class="label-password">
			<input
				type="password"
				class="password"
				use:validators={[required]}
				name="password"
				placeholder="Password"
				id="password"
				required
			/>
			<span class="required">Password</span>
		</label>
	</div>
	<Hint for="password" name="password-required-hint" on="required" id="password-required-hint" class="password-required-hint">Password is required</Hint>

	<input type="submit" disabled={!$form.valid} id="submit" value="Signup" />
</form>

<style>
	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}
</style>
