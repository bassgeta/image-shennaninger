import { useParams } from 'react-router-dom'
import { ImageEditorHandler } from '../../components/image_editor_handler/image_editor_handler'
import { ImageEditRouteParams } from '../../constants/routes'
import { MainLayout } from '../../layouts/main_layout'
import * as Styled from './image_edit.styled'

const areParamsValid = (params: any): params is ImageEditRouteParams => {
  return typeof params === 'object' && typeof params.imageId === 'string'
}

export function ImageEdit () {
  const params = useParams<ImageEditRouteParams>()

  // a small typeguard just because why not and because you can't type route params properly
  if (areParamsValid(params)) {
    return (
      <MainLayout>
        <Styled.ImageEditTitle>Edit and save your image!</Styled.ImageEditTitle>
        <ImageEditorHandler imageId={params.imageId} />
      </MainLayout>
    )
  }

  return null
}
