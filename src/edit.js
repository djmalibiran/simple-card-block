import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Card, CardBody, CardDivider, CardFooter, CardHeader, CardMedia, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit(props) {
	const {
		attributes: { title, mediaID, mediaURL, mediaALT, body },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value })
	}

	const onSelectImage = (media) => {
		setAttributes({
			mediaURL: media.url,
			mediaID: media.id,
			mediaALT: media.alt
		})
	}

	const onChangeBody = (value) => {
		setAttributes({ body: value })
	}

	return (
		<Card {...blockProps}>

			<CardMedia>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						multiple={false}
						value={mediaID}
						render={({ open }) => (
							<Button
								className={
									mediaID ? 'image-button' : 'button button-large'
								}
								onClick={open}
							>
								{!mediaID ? (
									__(
										'Upload Image',
										'simple-card-block'
									)
								) : (
									<img
										src={mediaURL}
										alt={mediaALT}
										style={{ width: "100%", height: "auto" }}
									/>
								)}
							</Button>
						)}
					/>
				</MediaUploadCheck>
			</CardMedia>

			<CardHeader>
				<RichText
					tagName='h4'
					placeholder={__(
						'Card Titleaaa...',
						'simple-card-block'
					)}
					value={title}
					onChange={onChangeTitle}
				/>
			</CardHeader>

			<CardBody>
				<RichText
					tagName='p'
					placeholder={__(
						'Contentaaa...',
						'simple-card-block'
					)}
					value={body}
					onChange={onChangeBody}
				/>
			</CardBody>

		</Card>
	);
}
